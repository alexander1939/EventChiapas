import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/style.css';

import img1 from '../assets/images/53617176275_f4249d55ff_c.jpg';
import img2 from '../assets/images/eventos-masivos.jpg';
import img3 from '../assets/images/EVENTOS-CORPORATIVOS-FOTOS-E-VÍDEOS-5-1600x1068.jpg';

const images = [img1, img2, img3];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <img src={images[currentImage]} alt="Evento" className="carousel-image" />

      <div className="carousel-overlay">
        <h1 className="hero-heading">
          Vive la emoción de <span>Eventos Chiapas</span>
        </h1>
        <p className="hero-subtitle">
          Eventos Chiapas, disfrutamos de diversos eventos y actividades que nos
          permiten conocer a nuestros amigos y familiares, conocer nuestro país y
          conocer nuestra cultura..:v
        </p>

        <button
          className="cta-button"
          onClick={() => navigate('/events')}
          aria-label="Explorar eventos"
        >
          Explorar eventos
        </button>
      </div>
    </div>
  );
};

export default Home;
