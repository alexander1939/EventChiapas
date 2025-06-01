import React from 'react';

interface Evento {
  id: number;
  nombre: string;
  fecha: string;
  lugar: string;
}

const events: Evento[] = [
  { id: 1, nombre: 'Conferencia de Tecnología', fecha: '2025-06-10', lugar: 'Ciudad de México' },
  { id: 2, nombre: 'Expo Innovación', fecha: '2025-07-05', lugar: 'Guadalajara' },
  { id: 3, nombre: 'Taller de Programación', fecha: '2025-08-20', lugar: 'Monterrey' },
];

const Event: React.FC = () => {
  return (
    <div className="wrapper">
      <h2 className="contact-title">Próximos Eventos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">Nombre</th>
              <th className="text-left px-4 py-2 border-b">Fecha</th>
              <th className="text-left px-4 py-2 border-b">Lugar</th>
            </tr>
          </thead>
          <tbody>
            {events.map((evento) => (
              <tr key={evento.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{evento.nombre}</td>
                <td className="px-4 py-2 border-b">{evento.fecha}</td>
                <td className="px-4 py-2 border-b">{evento.lugar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Event;
