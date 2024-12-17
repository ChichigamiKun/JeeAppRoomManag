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


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <>
                <div className="flex min-h-screen bg-slate-100">
                  <Sidebar />
                  <main className="flex-1 ml-64 p-8">
                    <Routes>
                      <Route path="/room" element={<RoomsPage />} />
                      <Route path="/residents" element={<ResidentsPage />} />
                      <Route path="/payments" element={<PaymentsAdminPage />} />
                      <Route path="/payments-resident" element={<PaymentsResidentPage />} />
                      <Route path="/maintenance" element={<MaintenancePage />} />
                      <Route path="/tickets" element={<TicketsPage />} />
                      <Route path="/incident" element={<IncidentPage />} />
                      <Route path="/acceuille" element={<TableauDeBord />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/profile" element={<ProfilePage />} />

                      
                    </Routes>
                  </main>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
