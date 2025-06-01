import React from 'react';

import '../assets/styles/event.css';

interface EventData {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const events: EventData[] = [
  {
    id: 1,
    title: "Concierto de Jazz",
    date: "2025-06-15",
    location: "Auditorio Central",
    description: "Disfruta de una noche mágica con los mejores músicos de jazz de la región.",
  },
  {
    id: 2,
    title: "Feria de Tecnología",
    date: "2025-07-10",
    location: "Centro de Convenciones",
    description: "Explora las últimas innovaciones y startups tecnológicas.",
  },
  {
    id: 3,
    title: "Festival Gastronómico",
    date: "2025-08-05",
    location: "Parque Central",
    description: "Sabores y aromas de la cocina local e internacional en un solo lugar.",
  },
];

const Event: React.FC = () => {
  return (
    <div className="event-wrapper">
      <h2 className="event-title">Próximos Eventos</h2>
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3 className="event-name">{event.title}</h3>
            <p className="event-date-location">
              📅 {new Date(event.date).toLocaleDateString()} | 📍 {event.location}
            </p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
