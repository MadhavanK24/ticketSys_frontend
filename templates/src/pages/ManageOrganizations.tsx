import Sidebar from '../components/Sidebar';
import '../styles/manage.css';

const ManageOrganizations = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <h1>🏢 Organizations</h1>
        <button className="new-user-btn">+ Add Organization</button>

        <div className="controls">
          <input type="text" className="search-input" placeholder="Search organizations..." />
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>Organization Name</th>
              <th>Domain</th>
              <th>Number of Users</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zammad Foundation</td>
              <td>zammad.com</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Acme Corp</td>
              <td>acme.io</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Globex</td>
              <td>globex.com</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ManageOrganizations;
