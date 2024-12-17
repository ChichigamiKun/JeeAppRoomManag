import { UserPlus, Mail } from 'lucide-react';

const mockResidents = [
  {
    id: '1',
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@email.com',
    roomNumber: '101',
    paymentStatus: 'paid',
  },
  {
    id: '2',
    firstName: 'Marie',
    lastName: 'Martin',
    email: 'marie.martin@email.com',
    roomNumber: '102',
    paymentStatus: 'pending',
  },
];

export default function ResidentsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold mb-10">Gestion des Résidents</h1>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <UserPlus size={20} />
          Ajouter un Résident
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold">Liste des Résidents</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Nom</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Chambre</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Contact</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Statut Paiement</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {mockResidents.map((resident) => (
                <tr key={resident.id}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-900">
                      {resident.firstName} {resident.lastName}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-900">
                    <select name="" id="">
                      <option value="">
                        {resident.roomNumber}
                      </option>
                    </select>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Mail size={16} />
                        {resident.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${resident.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                        resident.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'}`}>
                      {resident.paymentStatus.charAt(0).toUpperCase() + resident.paymentStatus.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">Modifier</button>
                    <button className="text-red-600 hover:text-red-800">Supprimer</button>
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