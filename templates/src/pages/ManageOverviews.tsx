import Sidebar from '../components/Sidebar';
import '../styles/manage.css';

const ManageOverviews = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <h1>Overview Management</h1>
        <button className="new-user-btn">+ New Overview</button>

        <div className="controls">
          <input
            type="text"
            className="search-input"
            placeholder="Search overviews..."
          />
       </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Link</th>
              <th>Available For</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>My Assigned Tickets</td>
              <td>my_assigned</td>
              <td>Agent</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>Unassigned & Open Tickets</td>
              <td>all_unassigned</td>
              <td>Agent</td>
              <td>1010</td>
            </tr>
            <tr>
              <td>Escalated Tickets</td>
              <td>all_escalated</td>
              <td>Agent</td>
              <td>1050</td>
            </tr>
            <tr>
              <td>My Tickets</td>
              <td>my_tickets</td>
              <td>Customer</td>
              <td>1100</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ManageOverviews;
