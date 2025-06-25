import Sidebar from '../components/Sidebar';
import '../styles/manage.css';

const ManageTemplates = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <h1>📄 Response Templates</h1>
        <button className="new-user-btn">+ New Template</button>

        <div className="controls">
          <input type="text" className="search-input" placeholder="Search templates..." />
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>Template Name</th>
              <th>Subject</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Welcome Email</td>
              <td>Welcome to our Support Portal</td>
              <td>Hello [Name], welcome onboard...</td>
            </tr>
            <tr>
              <td>Ticket Closed</td>
              <td>Your issue has been resolved</td>
              <td>We're glad to inform you...</td>
            </tr>
            <tr>
              <td>Follow-up</td>
              <td>Still need help?</td>
              <td>Just checking in to see if...</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ManageTemplates;
