import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Event from './pages/event'; // Asegúrate que la importación es correcta
import Layout from './components/Layout';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/events" element={<Layout><Event /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;