
import { Home, AlertTriangle, BanknoteIcon } from 'lucide-react';


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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-auto">
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

            <div className="bg-white m-12 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Plan des étages</h2>
                <img src="src/types/2D.jpg" alt="" className='w-fit m-auto'/>
            </div>
        </div>
    );
};

export default Dashboard;