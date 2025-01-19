import { Home, AlertTriangle, BanknoteIcon } from 'lucide-react';
import Navbar from '../components/Navbar';

const StatCard = ({ icon: Icon, title, value, color }:any) => (
  <div
    className="p-6 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
    style={{
      backgroundColor: '#1a1a2e',
      color: '#ebecec',
    }}
  >
    <div className="flex items-center space-x-4">
      <div
        className="p-3 rounded-full"
        style={{
          backgroundColor: color,
        }}
      >
        <Icon className="text-white" size={24} />
      </div>
      <div>
        <p className="text-[#47e8be] text-sm">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6">
        <h1
          className="text-3xl font-bold text-center"
          style={{
            color: '#47e8be',
          }}
        >
        </h1>

        {/* Section: Alerts and Notifications */}
        <div
          className="rounded-lg shadow-md p-6"
          style={{
            backgroundColor: '#1a1a2e',
            color: '#ebecec',
          }}
        >
          <h2
            className="text-xl font-semibold mb-4"
            style={{
              color: '#47e8be',
            }}
          >
            Alertes récentes
          </h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <span style={{ color: '#e74c3c' }}>Incident signalé : </span>
              Électricité coupée au 2ème étage.
            </li>
            <li className="mb-2">
              <span style={{ color: '#f39c12' }}>Paiement en retard : </span>
              Résident #102 - dernier délai : 10 janvier.
            </li>
            <li>
              <span style={{ color: '#228369' }}>Nouveau résident enregistré : </span>
              Chambre #405.
            </li>
          </ul>
        </div>

        {/* Section: Quick Actions */}
        <div
          className="rounded-lg shadow-md p-6"
          style={{
            backgroundColor: '#1a1a2e',
            color: '#ebecec',
          }}
        >
          <h2
            className="text-xl font-semibold mb-4"
            style={{
              color: '#47e8be',
            }}
          >
            Actions rapides
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: '#228369',
                color: '#ebecec',
              }}
            >
              Ajouter un résident
            </button>
            <button
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: '#47e8be',
                color: '#070a09',
              }}
            >
              Générer un rapport
            </button>
            <button
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: '#f39c12',
                color: '#ebecec',
              }}
            >
              Signaler un incident
            </button>
            <button
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: '#e74c3c',
                color: '#ebecec',
              }}
            >
              Voir les paiements
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-auto">
          <StatCard
            icon={Home}
            title="Taux d'occupation"
            value="90%"
            color="#228369"
          />
          <StatCard
            icon={Home}
            title="Chambres disponibles"
            value="12"
            color="#47e8be"
          />
          <StatCard
            icon={BanknoteIcon}
            title="Paiements en retard"
            value="5"
            color="#e74c3c"
          />
          <StatCard
            icon={AlertTriangle}
            title="Incidents en cours"
            value="8"
            color="#f39c12"
          />
        </div>

        {/* Section: Floor Plans */}
        <div
          className="rounded-lg shadow-md p-6"
          style={{
            backgroundColor: '#1a1a2e',
            color: '#ebecec',
          }}
        >
          <h2
            className="text-xl font-semibold mb-4"
            style={{
              color: '#47e8be',
            }}
          >
            Plan des étages
          </h2>
          <img
            src="src/types/2D.jpg" // Ensure this path points to the correct image location
            alt="Plan des étages"
            className="w-full max-w-2xl mx-auto rounded-lg"
            style={{
              border: '2px solid #333737',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
