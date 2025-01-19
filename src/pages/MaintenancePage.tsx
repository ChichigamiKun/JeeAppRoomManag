import { useState } from 'react';
import { Eye } from 'lucide-react';  // Import de l'icône
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

const mockTechnicians = [
  { id: '1', name: 'Technicien 1' },

];

const mockTickets = [
  {
    id: '1',
    residentName: 'Jean Dupont',
    roomNumber: '101',
    email: 'jean.dupont@email.com',
    ticketStatus: 'pending',
    description: 'Problème de chauffage',
    assignedTo: '1', // Assigned to Technicien 1
  },
];

export default function MaintenancePage() {
  const [technicians] = useState(mockTechnicians);
  const [tickets] = useState(mockTickets);
  const [selectedTechnician, setSelectedTechnician] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTechnicianClick = (technicianId: string) => {
    setSelectedTechnician(technicianId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTechnician(null);
  };

  return (
    <>
      <Navbar />
      <div className="p-8">
        {/* Technician List */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Techniciens</h1>
        </div>

        {/* Technician Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold">Liste des Techniciens</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">ID Technicien</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Nom du Technicien</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Voir les Tickets</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {technicians.map((technician) => (
                  <tr key={technician.id}>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{technician.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{technician.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-900">
                      <button
                        className="flex items-center text-blue-600 hover:text-blue-800"
                        onClick={() => handleTechnicianClick(technician.id)}
                      >
                        <Eye className="mr-2" size={18} /> {/* Icone pour voir les tickets */}
                        Voir les tickets
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for showing technician's tickets */}
        {isModalOpen && selectedTechnician && (
          <Modal
            technicianName={technicians.find(tech => tech.id === selectedTechnician)?.name || ''}
            tickets={tickets.filter(ticket => ticket.assignedTo === selectedTechnician).map(ticket => ({
              id: ticket.id,
              description: ticket.description,
            }))}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}
