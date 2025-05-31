import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/style.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2 className="home-title">Bienvenido a Eventos Chiapas</h2>
      <p className="home-description">Esta es la página principal.</p>
    </div>
  );
};

export default Home;