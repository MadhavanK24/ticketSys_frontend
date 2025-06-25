import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import SignUp from './pages/SignUp';
import ManageUsers from './pages/ManageUsers';
import ManageOverviews from './pages/ManageOverviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/manage_users" element={<ManageUsers />} />
      <Route path="/manage_overviews" element={<ManageOverviews />} />
    </Routes>
  );
}

export default App;
