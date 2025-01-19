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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddRoom = () => {
    const newRoomWithId = { ...newRoom, id: (rooms.length + 1).toString() };
    setIsModalOpen(false);
    setNewRoom({
      number: '',
      size: '',
      status: 'available',
      equipment: '',
    });
    console.log('New room added:', newRoomWithId);
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Gestion des Chambres</h1>
        <button
          onClick={handleModalToggle}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#47e8be',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <UserPlus size={20} />
          Ajouter une Chambre
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
          }}
        >
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.5rem', width: '400px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Ajouter une Chambre</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="number" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Numéro
                </label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  value={newRoom.number}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="size" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Taille (m²)
                </label>
                <input
                  id="size"
                  name="size"
                  type="number"
                  value={newRoom.size}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="status" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Statut
                </label>
                <select
                  id="status"
                  name="status"
                  value={newRoom.status}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                >
                  <option value="available">Disponible</option>
                  <option value="occupied">Occupée</option>
                  <option value="maintenance">En maintenance</option>
                </select>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="equipment" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Équipements
                </label>
                <input
                  id="equipment"
                  name="equipment"
                  type="text"
                  value={newRoom.equipment}
                  onChange={handleInputChange}
                  placeholder="Séparez les équipements par des virgules"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  type="button"
                  onClick={handleModalToggle}
                  style={{
                    backgroundColor: '#ccc',
                    color: '#000',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={handleAddRoom}
                  style={{
                    backgroundColor: '#47e8be',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Room List */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '2px solid #ccc' }}>Numéro</th>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '2px solid #ccc' }}>Taille (m²)</th>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '2px solid #ccc' }}>Statut</th>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '2px solid #ccc' }}>Équipements</th>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '2px solid #ccc' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{room.number}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{room.size}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    backgroundColor:
                      room.status === 'available'
                        ? '#47e8be'
                        : room.status === 'occupied'
                        ? '#47a9e8'
                        : '#e8c347',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                  }}
                >
                  {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                </span>
              </td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                {room.equipment.map((item, index) => (
                  <span key={index} style={{ display: 'block', fontSize: '0.875rem' }}>
                    {item}
                  </span>
                ))}
              </td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                <button style={{ marginRight: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <Pencil size={18} />
                </button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
