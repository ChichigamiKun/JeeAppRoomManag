import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RoomsPage from './pages/RoomsPage';
import ResidentsPage from './pages/ResidentsPage';
import PaymentsAdminPage from './pages/PaymentsAdminPage';
import PaymentsResidentPage from './pages/PaymentsResidentPage';
import MaintenancePage from './pages/MaintenancePage';
import TicketsPage from './pages/TicketsPage';
import IncidentPage from './pages/Incidents';
import TableauDeBord from './pages/TableauDeBord';
import LoginPage from './LoginPage';
import ContactPage from './pages/contact';
import ProfilePage from './pages/Profile';
import Statistics from './pages/Statistics';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#1a1a2e', color: '#ebecec', minHeight: '110vh' }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <div className="flex">
                <Sidebar />
                <main
                  className="flex-1 ml-64 p-8"
                  style={{ backgroundColor: '#111313', color: '#ebecec' }}
                >
                  <Routes>
                    <Route path="/room" element={<RoomsPage />} />
                    <Route path="/residents" element={<ResidentsPage />} />
                    <Route path="/payments" element={<PaymentsAdminPage />} />
                    <Route path="/paiments" element={<PaymentsResidentPage />} />
                    <Route path="/maintenance" element={<MaintenancePage />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                    <Route path="/incident" element={<IncidentPage />} />
                    <Route path="/accueil" element={<TableauDeBord />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/statistique" element={<Statistics />} />
                  </Routes>
                </main>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
