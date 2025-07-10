import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import Service from './components/Service';
import BookingPage from './components/BookingPage';
import Guide from './components/Guide';
import DashBoardLayout from './Dashboard/DashBoardLayout'; // New dashboard layout
import DashBoardView from './DashBoard/DashBoardView'; // Default dashboard view
import Orders from './DashBoard/Orders'; // Orders section
import Profile from './DashBoard/Profile'; // Profile section
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
            <Route path="orders" element={<Orders />} /> {/* Orders section */}
            <Route path="profile" element={<Profile />} /> {/* Profile section */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;