import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UsersPage from './manage_users/usersPage/UsersPage';
import OverviewsPage from './manage_overviews/OverviewsPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/overviews" element={<OverviewsPage />} />
        <Route path="*" element={<UsersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
