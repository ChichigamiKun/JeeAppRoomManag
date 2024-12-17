import { useState, /*useEffect*/ } from 'react';
import { UserPlus } from 'lucide-react';

export default function TicketsPage() {

    //example of data befor implementation of backend ---- to delete after

    const [tickets, /*setTickets*/ ] = useState([
        {
            id: '1',
            status: 'Open',
            category: 'Technical Issue',
            description: 'The printer is not working.',
            assignedTo: 'John Doe',
            requestedBy: 'Alice Smith',
            email: 'alice.smith@example.com',
        },
        {
            id: '2',
            status: 'In Progress',
            category: 'Maintenance',
            description: 'The air conditioner is leaking.',
            assignedTo: 'Jane Roe',
            requestedBy: 'Bob White',
            email: 'bob.white@example.com',
        },
    ]);

    //const [tickets, setTickets] = useState([]);
    const statusOptions = ['Open', 'In Progress', 'Resolved', 'Not Resolved'];

    // const getStatusStyle = (status) => {
    //     switch (status) {
    //         case 'Open':
    //             return 'bg-green-100 text-green-800';
    //         case 'In Progress':
    //             return 'bg-blue-100 text-blue-800';
    //         case 'Resolved':
    //             return 'bg-gray-100 text-gray-800';
    //         case 'Not Resolved':
    //             return 'bg-red-100 text-red-800';
    //         default:
    //             return 'bg-gray-100 text-gray-800';
    //     }
    // };

    // Fetch tickets from the backend
    // useEffect(() => {
    //     async function fetchTickets() {
    //         const response = await fetch('/api/tickets');
    //         const data = await response.json();
    //         setTickets(data);
    //     }
    //     fetchTickets();
    // }, []);

    // const handleStatusChange = (id, newStatus) => {
    //     setTickets((prevTickets) =>
    //         prevTickets.map((ticket) =>
    //             ticket.id === id ? { ...ticket, status: newStatus } : ticket
    //         )
    //     );
    // };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Help Desk</h1>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    <UserPlus size={20} />
                    Créer un Ticket
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200">
                    <h2 className="text-lg font-semibold">Liste des Tickets</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">ID</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Etat</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Catégories</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Description</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Assignée à</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Demandé par</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Email</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {tickets.map((ticket) => (
                                <tr key={ticket.id}>
                                    <td className="px-6 py-4 text-sm text-slate-900">{ticket.id}</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">
                                        <select
                                            // value={ticket.status}
                                            // onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                                            className="bg-white border border-gray-300 rounded px-2 py-1 text-sm"
                                            aria-label="Change ticket status"
                                        >
                                            {statusOptions.map((status) => (
                                                <option key={status} value={status}>
                                                    {status}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-900">{ticket.category}</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">{ticket.description}</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">{ticket.assignedTo}</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">{ticket.requestedBy}</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">{ticket.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
