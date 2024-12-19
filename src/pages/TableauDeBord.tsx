import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { Home, AlertTriangle, BanknoteIcon } from 'lucide-react';

const data = [
    { month: 'Jan', occupancy: 85, payments: 95, incidents: 12 },
    { month: 'Fév', occupancy: 88, payments: 92, incidents: 8 },
    { month: 'Mar', occupancy: 90, payments: 97, incidents: 15 },
];

const StatCard = ({ icon: Icon, title, value, color }: any) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-full ${color}`}>
                <Icon className="text-white" size={24} />
            </div>
            <div>
                <p className="text-gray-500 text-sm">{title}</p>
                <p className="text-2xl font-semibold">{value}</p>
            </div>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Tableau de bord</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={Home}
                    title="Taux d'occupation"
                    value="90%"
                    color="bg-blue-500"
                />
                <StatCard
                    icon={Home}
                    title="Chambres disponibles"
                    value="12"
                    color="bg-green-500"
                />
                <StatCard
                    icon={BanknoteIcon}
                    title="Paiements en retard"
                    value="5"
                    color="bg-red-500"
                />
                <StatCard
                    icon={AlertTriangle}
                    title="Incidents en cours"
                    value="8"
                    color="bg-yellow-500"
                />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Tendances</h2>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="occupancy" fill="#3B82F6" name="Occupation" />
                            <Bar dataKey="payments" fill="#10B981" name="Paiements" />
                            <Bar dataKey="incidents" fill="#EF4444" name="Incidents" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;