import React from 'react';
import Sidebar from '../components/Sidebar';

const OverviewsPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', width: '100%' }}>
        <h1>Overview Management</h1>
        <p>This is the Overviews page.</p>
      </div>
    </div>
  );
};

export default OverviewsPage;
