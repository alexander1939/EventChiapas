import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2>Contáctanos</h2>

      <div className="contact-method">
        <p>Teléfono: <a href="tel:+529611234567">+52 961 123 4567</a></p>
      </div>

      <div className="contact-method">
        <p>SMS: <a href="sms:+529611234567">+52 961 123 4567</a></p>
      </div>

      <div className="contact-method">
        <p>Correo: <a href="mailto:contacto@eventchiapas.com">contacto@eventchiapas.com</a></p>
      </div>

      <div className="social-media">
        <p>Síguenos en redes sociales:</p>
        <ul>
          <li><a href="https://facebook.com/EventChiapas" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com/EventChiapas" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com/EventChiapas" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
