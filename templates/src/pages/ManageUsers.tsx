import Sidebar from '../components/Sidebar';
import '../styles/manage.css';
import "react";

const ManageUsers = () => {
  return (
    <div className="container">
      <Sidebar/>
      <main className="content">
        <h1>Users Management</h1>
        <button className="new-user-btn">+ New User</button>
        <div className="controls">
          <input type="text" className="search-input" placeholder="Search..." />
          <div className="role-filters">
            <button className="filter active">Admin</button>
            <button className="filter">Agent</button>
            <button className="filter">Customer</button>
          </div>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>Login</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Organization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dhanvasanth.r2023@vite.com</td>
              <td>Dhan</td>
              <td>Vasanth</td>
              <td>-</td>
            </tr>
            <tr>
              <td>nicole.braun@zammad.com</td>
              <td>Nicole</td>
              <td>Braun</td>
              <td>Zammad Foundation</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ManageUsers;
