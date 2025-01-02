
import { Home, Users, Send, CreditCard, Settings, LayoutDashboard, BarChart2 ,Bell, BadgePlus, CircleDollarSign } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const menuItems = [
  { icon: LayoutDashboard, label: 'Accueil', path: '/accueil' },
  { icon: Home, label: 'Chambres', path: '/Room' },
  { icon: Users, label: 'Résidents', path: '/residents' },
  { icon: CreditCard, label: 'Historique Paiements', path: '/payments' },
  { icon: CircleDollarSign, label: 'Paiements Resident', path: '/paiments' },
  { icon: Bell, label: 'Help Desk', path: '/tickets' },
  { icon: BadgePlus, label: 'Créer Incident', path: '/incident' },
  { icon: BarChart2, label: 'Statistiques', path: '/statistique' },
  { icon: Send, label: 'Contact', path: '/contact' },
  { icon: Settings, label: 'Profile', path: '/profile' },

];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-blue-900 text-white p-4 fixed left-0 top-0">
      <img
        src="src/types/logoIR.jpeg"
        alt=""
        style={{
          margin: 'auto',
          borderRadius: '20px',
          width: '100px'
        }}
      />

      <div className="mb-8 mt-5 flex justify-center">
        <h1 className="text-xl font-bold ">IRoom Services</h1>
      </div>


      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors ${isActive
                ? 'bg-sky-400 text-white shadow-blue-200'
                : 'text-white hover:bg-sky-400 '
                }`}
            >
              <Icon size={25} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}