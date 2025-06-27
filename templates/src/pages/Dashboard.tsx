import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">Raise</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li onClick={() => navigate('/manage_users')}>Manage</li>
        </ul>
      </aside>

      <main className="main-content">
        <h1 className="page-title">Welcome to Dashboard</h1>
        <div className="card-grid">
          <div className="dash-card">
            <h3>📩 All Tickets</h3>
            <p>View all tickets assigned and unassigned.</p>
          </div>

          <div className="dash-card">
            <h3>🎫 My Tickets</h3>
            <p>See tickets that are assigned to you.</p>
          </div>

          <div className="dash-card">
            <h3>🔐 Permissions</h3>
            <p>Review your access rights and roles.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
