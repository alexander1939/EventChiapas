import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/style.css';

const images = [
  'https://blog.novelty-spain.com/hubfs/53617176275_f4249d55ff_c.jpg',
  'https://i0.wp.com/almomento.mx/wp-content/uploads/2021/12/eventos-masivos.jpg?fit=621%2C411&ssl=1',
  'https://neopix.com.br/wp-content/uploads//2022/08/EVENTOS-CORPORATIVOS-FOTOS-E-V%C3%8DDEOS-5-1600x1068.jpg',
];

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
          Experiencias inolvidables, cultura, música y más...
        </p>

        <button
          className="cta-button"
          onClick={() => navigate('/eventos')}
        >
          Explorar eventos
        </button>
      </div>
    </div>
  );
};

export default Home;
