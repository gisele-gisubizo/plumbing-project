import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'
import Products from './components/Products';
import Service from './components/Service';
import BookingPage from './components/BookingPage';
import Guide from './components/Guide'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
   <Route  path='/' element={<Layout />}>
   <Route path='/home' element={<Home/>} />
   <Route path='/products' element={<Products/>} />
   <Route path='/service' element={<Service/>} />
   <Route path='/booking' element={<BookingPage/>} />
   <Route path='/guide' element={<Guide/>} />



   </Route>

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
