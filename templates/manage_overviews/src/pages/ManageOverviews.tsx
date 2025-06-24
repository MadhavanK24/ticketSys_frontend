import 'react';
import OverviewTable from '../components/OverviewTable';
import '../styles/manage.css';

const ManageOverviews = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Manage</h2>
        <ul>
          <li>Users</li>
          <li className="active">Overviews</li>
          <li>Roles</li>
          <li>Organizations</li>
          <li>Templates</li>
        </ul>
      </aside>
      <main className="main-content">
        <OverviewTable />
      </main>
    </div>
  );
};

export default ManageOverviews;
