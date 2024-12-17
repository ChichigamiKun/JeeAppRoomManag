import { useState } from 'react';
import { Pencil, Trash2, UserPlus } from 'lucide-react';

const mockRooms = [
  {
    id: '1',
    number: '101',
    size: 20,
    status: 'occupied',
    equipment: ['Lit', 'Bureau', 'Armoire', 'Salle de bain privée'],
  },
  {
    id: '2',
    number: '102',
    size: 18,
    status: 'available',
    equipment: ['Lit', 'Bureau', 'Armoire'],
  },
  // Add more mock rooms as needed
];

export default function RoomsPage() {
  const [rooms] = useState(mockRooms);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRoom, setNewRoom] = useState({
    number: '',
    size: '',
    status: 'available',
    equipment: '',
  });

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewRoom((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleAddRoom = () => {
    // Simulate sending data to backend (use API call here)
    const newRoomWithId = { ...newRoom, id: (rooms.length + 1).toString() };

    // Add room to the list (state)
    // setRooms([...rooms, newRoomWithId]);

    // Close the modal
    setIsModalOpen(false);

    // Reset the form
    setNewRoom({
      number: '',
      size: '',
      status: 'available',
      equipment: '',
    });

    // Simulate a backend call (you can replace this with an API call)
    console.log('New room added:', newRoomWithId);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold mb-8">Gestion des Chambres</h1>
        <button
          onClick={handleModalToggle}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <UserPlus size={20} />
          Ajouter une Chambre
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Ajouter une Chambre</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                  Numéro
                </label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  value={newRoom.number}
                  // onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                  Taille (m²)
                </label>
                <input
                  id="size"
                  name="size"
                  type="number"
                  value={newRoom.size}
                  // onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Statut
                </label>
                <select
                  id="status"
                  name="status"
                  value={newRoom.status}
                  // onChange={handleInputChange}
                  className="p-2 border rounded w-full"
                >
                  <option value="available">Disponible</option>
                  <option value="occupied">Occupée</option>
                  <option value="maintenance">En maintenance</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
                  Équipements
                </label>
                <input
                  id="equipment"
                  name="equipment"
                  type="text"
                  value={newRoom.equipment}
                  // onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  placeholder="Séparez les équipements par des virgules"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handleModalToggle}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAddRoom}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Room List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold">Liste des Chambres</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Numéro</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Taille (m²)</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Équipements</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rooms.map((room) => (
                <tr key={room.id}>
                  <td className="px-6 py-4 text-sm text-slate-900">{room.number}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{room.size}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${room.status === 'available'
                        ? 'bg-green-100 text-green-800'
                        : room.status === 'occupied'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                        }`}
                    >
                      {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">
                    {/* {room.equipment.split(',').map((item, index) => (
                      <span key={index} className="block">{item}</span>
                    ))} */}
                  </td>
                  <td className="flex px-6 py-4 text-sm">
                    <a href="" className="mr-4">
                      <Pencil className="text-blue-500" />
                    </a>
                    <a href="">
                      <Trash2 className="text-red-600" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
