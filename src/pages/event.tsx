import React, { useState } from 'react';
import '../assets/styles/event.css';

interface EventData {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const initialEvents: EventData[] = [
  {
    id: 1,
    title: "Concierto de Eminem",
    date: "2025-06-15",
    location: "Parque Central",
    description: "Disfruta de una noche increible con Eminem",
  },
  {
    id: 2,
    title: "Feria de Tecnología",
    date: "2025-07-10",
    location: "Parque Central",
    description: "Explora los proyectos de innovación",
  },
  {
    id: 3,
    title: "Festival Gastronómico",
    date: "2025-08-05",
    location: "Parque Central",
    description: "Sabores Unicos",
  },
];

const Event: React.FC = () => {
  const [events] = useState<EventData[]>(initialEvents);

  return (
    <div className="event-wrapper">
      <h2 className="event-title">Próximos Eventos</h2>

      {/* Botón Crear Evento eliminado */}

      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3 className="event-name">{event.title}</h3>
            <p className="event-date-location">
              {new Date(event.date).toLocaleDateString()} |  {event.location}
            </p>
            <p className="event-description">{event.description}</p>

            {/* Botones Editar y Eliminar eliminados */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
