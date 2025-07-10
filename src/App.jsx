import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import Service from './components/Service';
import BookingPage from './components/BookingPage';
import Guide from './components/Guide';
import DashBoardLayout from './Dashboard/DashBoardLayout';
import DashBoardView from './Dashboard/DashBoardView';
import Services from './DashBoard/Services';
import ProductsDashboard from './DashBoard/Products';
import Appointments from './DashBoard/Appointments';
import Settings from './DashBoard/Settings';
import Inventory from './DashBoard/Inventory';
import Reports from './DashBoard/Reports';
import { ThemeProvider } from './Dashboard/ThemeContext';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/service" element={<Service />} />
            <Route path="/booking" element={<BookingPage />} />
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