import React from 'react';
import Sidebar from '../../components/Sidebar';

const UsersPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', width: '100%' }}>
        <h1>Users Management</h1>
        <p>This is the Users page.</p>
      </div>
    </div>
  );
};

export default UsersPage;
