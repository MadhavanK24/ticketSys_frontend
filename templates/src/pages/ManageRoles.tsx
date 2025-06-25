import Sidebar from '../components/Sidebar';
import '../styles/manage.css';

const ManageRoles = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <h1>👥 Roles Management</h1>
        <button className="new-user-btn">+ New Role</button>

        <div className="controls">
          <input type="text" className="search-input" placeholder="Search roles..." />
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Description</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td>Full access to all modules</td>
              <td>Manage Users, Tickets, Settings</td>
            </tr>
            <tr>
              <td>Agent</td>
              <td>Respond to tickets and manage customers</td>
              <td>Tickets, Customers</td>
            </tr>
            <tr>
              <td>Viewer</td>
              <td>Read-only access</td>
              <td>View Tickets</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ManageRoles;
