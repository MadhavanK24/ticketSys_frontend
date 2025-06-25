import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import SignUp from './pages/SignUp';
import ManageUsers from './pages/ManageUsers';
import ManageOverviews from './pages/ManageOverviews';
import ManageRoles from './pages/ManageRoles';
import ManageOrganizations from './pages/ManageOrganizations';
import ManageTemplates from './pages/ManageTemplates';
import NewTicket from './pages/NewTicket';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/manage_users" element={<ManageUsers />} />
      <Route path="/manage_overviews" element={<ManageOverviews />} />
      <Route path="/manage_roles" element={<ManageRoles />} />
      <Route path="/manage_organizations" element={<ManageOrganizations />} />
      <Route path="/manage_templates" element={<ManageTemplates />} />
      <Route path="/new_ticket" element={<NewTicket />} />
    </Routes>
  );
}

export default App;
