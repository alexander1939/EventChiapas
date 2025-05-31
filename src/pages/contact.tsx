import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Contact: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: '¡Hola! ¿En qué puedo ayudarte?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automático al mensaje más reciente
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simula respuesta del bot después de enviar mensaje
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: 'user',
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simula respuesta bot después de 1.5s
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: 'Gracias por tu mensaje, pronto te responderemos.',
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1500);
  };

  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">Contáctanos</h2>
      <div className="contact-section">
        <label className="contact-label">Teléfono:</label>
        <a href="tel:+529611234567" className="contact-link">
          <i className="fas fa-phone-alt contact-icon"></i> +52 961 123 4567
        </a>
      </div>

      <div className="contact-section">
        <label className="contact-label">SMS:</label>
        <a href="sms:+529611234567" className="contact-link">
          <i className="fas fa-sms contact-icon"></i> +52 961 123 4567
        </a>
      </div>

      <div className="contact-section">
        <label className="contact-label">Correo:</label>
        <a href="mailto:contacto@eventchiapas.com" className="contact-link">
          <i className="fas fa-envelope contact-icon"></i> contacto@eventchiapas.com
        </a>
      </div>

      <div className="contact-section">
        <label className="contact-label">Redes Sociales:</label>
        <ul className="contact-social-list">
          <li>
            <a
              href="https://facebook.com/EventChiapas"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f contact-icon"></i> Facebook
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/EventChiapas"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram contact-icon"></i> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/EventChiapas"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter contact-icon"></i> Twitter
            </a>
          </li>
        </ul>
      </div>

      {/* Chat interactivo */}
      <div className="chat-simulado">
        <h3 className="contact-label">Chat en vivo (simulado)</h3>
        <div className="chat-container">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`chat-message ${msg.sender === 'user' ? 'chat-user' : 'chat-bot'}`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={sendMessage} style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{
              flex: 1,
              padding: '0.6rem 1rem',
              borderRadius: '20px',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              padding: '0 1.5rem',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;