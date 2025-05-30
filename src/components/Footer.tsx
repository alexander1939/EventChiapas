import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Eventos Chiapas. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;