import { NavLink } from 'react-router-dom';
import '../styles/manage.css';

const Sidebar = () => {
  const activeStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'active' : '';

  return (
    <div className="sidebar">
      <h2>Manage</h2>
      <ul>
        <li>
          <NavLink to="/manage_users" className={activeStyle}>Users</NavLink>
        </li>
        <li>
          <NavLink to="/manage_overviews" className={activeStyle}>Overviews</NavLink>
        </li>
        <li>
          <NavLink to="/manage_roles" className={activeStyle}>Roles</NavLink>
        </li>
        <li>
          <NavLink to="/manage_organizations" className={activeStyle}>Organizations</NavLink>
        </li>
        <li>
          <NavLink to="/manage_templates" className={activeStyle}>Templates</NavLink>
        </li>
        <li>
          <NavLink to="/new_ticket" className={activeStyle}>🎫 Ticket</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
