import React from 'react';
import '../assets/styles/style.css';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/images/canva-logo-fiestas-y-piñatas-divertido-morado-y-rosa-C4CRvUL02EU.jpg';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <a href='#home' onClick={() => navigate('/')} className="app-title">Eventos Chiapas</a>
      </div>

      <nav className="nav-menu">
        <a href="#eventos" onClick={() => navigate('/events')} className="nav-link">Eventos</a>
        <a href="#contacto" onClick={() => navigate('/contact')} className="nav-link">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
