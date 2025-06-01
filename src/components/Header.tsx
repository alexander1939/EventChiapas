import React from 'react';
import '../assets/styles/style.css';
import { Link } from 'react-router-dom';

import logo from '../assets/images/canva-logo-fiestas-y-piñatas-divertido-morado-y-rosa-C4CRvUL02EU.jpg';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <Link to="/" className="app-title">Eventos Chiapas</Link>
      </div>

      <nav className="nav-menu">
        <Link to="/events" className="nav-link">Eventos</Link>
        <Link to="/contact" className="nav-link">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
