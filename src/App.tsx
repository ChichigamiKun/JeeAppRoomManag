
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RoomsPage from './pages/RoomsPage';
import ResidentsPage from './pages/ResidentsPage';
import PaymentsAdminPage from './pages/PaymentsAdminPage';
import PaymentsResidentPage from './pages/PaymentsResidentPage';
import MaintenancePage from './pages/MaintenancePage';
import TicketsPage from './pages/TicketsPage';
import IncidentPage from './pages/Incidents';
import StatistiquePage from './pages/StatistiquePage';
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-100">

        <Sidebar />
        <main className="flex-1 ml-64 p-8">

          <Routes>
            {/* <Route path="/" element={<LoginPage />} /> */}
            <Route path="/Room" element={<RoomsPage />} />
            <Route path="/residents" element={<ResidentsPage />} />
            <Route path="/payments" element={<PaymentsAdminPage />} />
            <Route path="/paiments" element={<PaymentsResidentPage />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/incident" element={<IncidentPage />} />
            <Route path="/statistique" element={<StatistiquePage />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;