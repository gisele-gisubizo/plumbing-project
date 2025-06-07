import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
   <Route  path='/' element={<Layout />}>


   </Route>

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
