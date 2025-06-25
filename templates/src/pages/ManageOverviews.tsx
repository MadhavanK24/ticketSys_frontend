import Sidebar from '../components/Sidebar';
import OverviewTable from '../components/OverviewTable';
import '../styles/manage.css';
import "react";

const ManageOverviews = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <OverviewTable />
      </main>
    </div>
  );
};

export default ManageOverviews;
