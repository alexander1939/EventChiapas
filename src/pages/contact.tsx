import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">Contáctanos</h2>

      <div className="contact-section">
        <label className="contact-label">Teléfono:</label>
        <a href="tel:+529611234567" className="contact-link">
          <i className="fas fa-phone-alt contact-icon"></i>
          +52 961 123 4567
        </a>
      </div>

      <div className="contact-section">
        <label className="contact-label">SMS:</label>
        <a href="sms:+529611234567" className="contact-link">
          <i className="fas fa-sms contact-icon"></i>
          +52 961 123 4567
        </a>
      </div>

      <div className="contact-section">
        <label className="contact-label">Correo:</label>
        <a href="mailto:contacto@eventchiapas.com" className="contact-link">
          <i className="fas fa-envelope contact-icon"></i>
          contacto@eventchiapas.com
        </a>
      </div>

      <div className="contact-section">
        <label className="contact-label">Redes Sociales:</label>
        <ul className="contact-social-list">
          <li>
            <a href="https://facebook.com/EventChiapas" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f contact-icon"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com/EventChiapas" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram contact-icon"></i> Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/EventChiapas" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter contact-icon"></i> Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
