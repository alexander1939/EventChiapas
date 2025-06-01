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
  const [events, setEvents] = useState<EventData[]>(initialEvents);

  const handleCreate = () => {
    // Aquí podrías abrir un formulario modal o redirigir
    alert("Creado exitosamente");
  };

  const handleEdit = (id: number) => {
    alert(`Editado Correctamente`);
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("¿Seguro que deseas eliminar este evento?");
    if (confirmDelete) {
      alert(`Eliminado Correctamente`);
    }
  };
  
  return (
    <div className="event-wrapper">
      <h2 className="event-title">Próximos Eventos</h2>

      <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
        <button className="event-button create-button" onClick={handleCreate}>
          Crear Evento
        </button>
      </div>

      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3 className="event-name">{event.title}</h3>
            <p className="event-date-location">
              {new Date(event.date).toLocaleDateString()} |  {event.location}
            </p>
            <p className="event-description">{event.description}</p>

            <div className="event-actions">
              <button className="event-button edit-button" onClick={() => handleEdit(event.id)}>
                Editar
              </button>
              <button className="event-button delete-button" onClick={() => handleDelete(event.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
