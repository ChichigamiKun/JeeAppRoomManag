import {
  Home,
  Users,
  Send,
  CreditCard,
  Settings,
  LayoutDashboard,
  BarChart2,
  Bell,
  BadgePlus,
  Pickaxe,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Accueil', path: '/accueil' },
  { icon: Home, label: 'Chambres', path: '/Room' },
  { icon: Users, label: 'Résidents', path: '/residents' },
  { icon: CreditCard, label: 'Historique Paiements', path: '/payments' },
  { icon: BadgePlus, label: 'Créer Incident', path: '/incident' },
  { icon: Bell, label: 'Help Desk', path: '/tickets' },
  { icon: Pickaxe, label: 'Maintenance', path: '/maintenance' },
  { icon: BarChart2, label: 'Statistiques', path: '/statistique' },
  { icon: Send, label: 'Contact', path: '/contact' },
  { icon: Settings, label: 'Profile', path: '/profile' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div
      className="fixed left-0 top-0 flex flex-col items-center"
      style={{
        height: '110vh', // Full viewport height
        width: '17rem', // Fixed width for sidebar
        backgroundColor: '#1a1a2e', // Dark background for better contrast
        color: '#eaeaea', // Light text for legibility
        overflowY: 'auto', // Scrollable if content overflows
      }}
    >
      {/* Centered Logo */}
      <div className="mt-6 mb-4 flex justify-center">
        <img
          src="src/types/logoIR.jpeg"
          alt="Logo"
          className="rounded-lg"
          style={{
            width: '80%',
            maxWidth: '120px',
          }}
        />
      </div>

      {/* Navigation Menu */}
      <nav className="w-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 rounded-lg mx-3 mb-3"
              style={{
                padding: '0.6rem 1rem', // Balanced padding for better spacing
                backgroundColor: isActive ? '#47e8be' : 'transparent', // Highlight active menu item
                color: isActive ? '#1a1a2e' : '#eaeaea', // Contrast between active and inactive text
                transition: 'all 0.3s ease', // Smooth transition for hover effects
                boxShadow: isActive
                  ? '0 4px 6px rgba(71, 232, 190, 0.3)' // Subtle shadow for active state
                  : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3bc0a3'; // Slightly darker hover color
                e.currentTarget.style.color = '#ffffff'; // Ensure legibility on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isActive
                  ? '#47e8be'
                  : 'transparent'; // Reset background color
                e.currentTarget.style.color = isActive
                  ? '#1a1a2e'
                  : '#eaeaea'; // Reset text color
              }}
            >
              <Icon size={20} /> {/* Icon size for clarity */}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
