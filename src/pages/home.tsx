import React from 'react';
import '../assets/styles/style.css';  // Ruta corregida (sin "../../")

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a Eventos Chiapas</h1>
      <p className="home-description">Esta es la página principal.</p>
    </div>
  );
};

export default Home;