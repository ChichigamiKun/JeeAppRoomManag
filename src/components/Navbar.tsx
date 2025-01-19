import { FiUser, FiSearch } from 'react-icons/fi'; // Login and Search Icons from react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { Home, Users, Send, CreditCard, Settings, LayoutDashboard, BarChart2, Bell, BadgePlus, Pickaxe } from 'lucide-react'; // Import icons for the sidebar
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

function Navbar() {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <div
            className="bg-[#1a1a2e] "
            style={{
                position: 'fixed', // Fix the navbar to the top
                top: '0',
                left: '17rem', // Adjust navbar position to the right of the sidebar
                right: '0',
                zIndex: '1000',
                padding: '0 1rem', // Add padding to prevent overlap with sidebar
            }}
        >
            <div className="flex items-center justify-between px-4 py-2">
                <div className="relative flex-grow max-w-[48%]">
                    <input
                        type="text"
                        placeholder="Recherchez un résident..."
                        className="w-full p-3 pl-12 rounded-[10px] border border-[#333737] focus:border-[#47e8be] focus:outline-none focus:ring focus:ring-[#228369] text-[#ebecec] bg-[#1a1a2e]"
                    />
                    <FiSearch
                        size={20}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#ebecec] pointer-events-none"
                    />
                </div>

                <div className="relative flex-grow max-w-[48%]">
                    <input
                        type="text"
                        placeholder="Recherchez une chambre..."
                        className="w-full p-3 pl-12 rounded-[10px] border border-[#333737] focus:border-[#47e8be] focus:outline-none focus:ring focus:ring-[#228369] text-[#ebecec] bg-[#1a1a2e]"
                    />
                    <FiSearch
                        size={20}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#ebecec] pointer-events-none"
                    />
                </div>

                <button
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#228369] text-[#ebecec] hover:bg-[#47e8be] hover:text-[#202038] focus:outline-none focus:ring-2 focus:ring-[#228369] transition-all"
                    onClick={handleProfileClick}
                    aria-label="Profile"
                >
                    <FiUser size={20} />
                </button>
            </div>
        </div>
    );
}

export default function SidebarLayout() {
  const location = useLocation();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className="fixed left-0 top-0 flex flex-col items-center"
        style={{
          height: '100vh', // Full viewport height
          width: '17rem', // Fixed width for sidebar
          backgroundColor: '#1a1a2e', // Dark background for better contrast
          color: '#eaeaea', // Light text for legibility
          overflowY: 'auto', // Scrollable if content overflows
        }}
      >
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

        <h1
          className="text-center font-bold mb-6"
          style={{
            fontSize: '1.4rem',
            color: '#47e8be',
          }}
        >
          IRROOM
        </h1>

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
                  padding: '0.6rem 1rem',
                  backgroundColor: isActive ? '#47e8be' : 'transparent',
                  color: isActive ? '#1a1a2e' : '#eaeaea',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 4px 6px rgba(71, 232, 190, 0.3)' : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3bc0a3';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isActive ? '#47e8be' : 'transparent';
                  e.currentTarget.style.color = isActive ? '#1a1a2e' : '#eaeaea';
                }}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="ml-[17rem] w-full">
        <Navbar />
        {/* Add other content here */}
      </div>
    </div>
  );
}
