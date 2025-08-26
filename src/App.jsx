import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from './components/About';
import Home from './components/Home';

import Booking from './components/Booking';
import Guide from './components/Guide';
import DashBoardLayout from './Dashboard/DashBoardLayout';
import DashBoardView from './Dashboard/DashBoardView';
import Services from './Dashboard/Services';
import ProductsDashboard from './DashBoard/Products';
import Appointments from './DashBoard/Appointments';
import Settings from './DashBoard/Settings';
import Inventory from './Dashboard/Inventory';
import LoginPage from './Dashboard/LoginPage';
import RegisterPage from './Dashboard/RegisterPage';
import Reports from './Dashboard/Reports';
import { ThemeProvider } from './Dashboard/ThemeContext';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
         
            <Route path="/home" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            
            <Route path="/booking" element={<Booking />} />
            <Route path="/guide" element={<Guide />} />
          </Route>

           
          <Route
            path="/dashboard"
            element={
              <ThemeProvider>
                <DashBoardLayout />
              </ThemeProvider>
            }
          >
            <Route index element={<DashBoardView />} />
           <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<ProductsDashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="settings" element={<Settings />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;