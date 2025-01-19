import React from 'react';

interface Ticket {
  id: string;
  description: string;
}

interface ModalProps {
  technicianName: string;
  tickets: Ticket[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ technicianName, tickets, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <h2 className="text-2xl font-bold mb-4">Tickets traités par {technicianName}</h2>
        <div className="space-y-4">
          {tickets.length === 0 ? (
            <p>Aucun ticket trouvé.</p>
          ) : (
            tickets.map((ticket) => (
              <div key={ticket.id} className="border-b pb-2">
                <h3 className="font-semibold">Ticket #{ticket.id}</h3>
                <p>{ticket.description}</p>
              </div>
            ))
          )}
        </div>
        <button
          className="mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
