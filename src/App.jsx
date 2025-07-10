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
import Services from './DashBoard/Services'; // New services section
import ProductsDashboard from './DashBoard/Products'; // New products section
import Appointments from './DashBoard/Appointments'; // New appointments section
import Settings from './DashBoard/Settings'; // New settings section
import Inventory from './DashBoard/Inventory'; // New inventory section
import Reports from './DashBoard/Reports'; // New reports section
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Application Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Default to Home */}
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/service" element={<Service />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/guide" element={<Guide />} />
          </Route>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route index element={<DashBoardView />} /> {/* Default dashboard view */}
            <Route path="services" element={<Services />} /> {/* Services management */}
            <Route path="products" element={<ProductsDashboard />} /> {/* Products management */}
            <Route path="appointments" element={<Appointments />} /> {/* Appointments management */}
            <Route path="settings" element={<Settings />} /> {/* Settings */}
            <Route path="inventory" element={<Inventory />} /> {/* Inventory tracking */}
            <Route path="reports" element={<Reports />} /> {/* Reports and analytics */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;