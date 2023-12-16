import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Specials from './components/Specials';
import dishesData from './components/DishesData';
import LoginPage from './pages/LoginPage';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import Order from './pages/Order';
import ConfirmedLogging from './pages/ConfirmedLogging';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/menu" element={<Layout><Specials dishes={dishesData} /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/booking" element={<Layout><BookingPage /></Layout>} />
          <Route path="/booking-confirmed" element={<Layout><ConfirmedBooking /></Layout>} />
          <Route path="/login" element={<Layout><LoginPage /></Layout>} />
          <Route path="/order" element={<Layout><Order /></Layout>} />
          <Route path="/logged-in" element={<Layout><ConfirmedLogging /></Layout>} />
        </Routes>
      </div>
    </ShoppingCartProvider>

  );
}

export default App;
