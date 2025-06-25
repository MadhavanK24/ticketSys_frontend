import "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/manage.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="sidebar">
      <h2>Manage</h2>
      <ul>
        <li
          className={isActive("/manage_users") ? "active" : ""}
          onClick={() => navigate("/manage_users")}
        >
          Users
        </li>
        <li
          className={isActive("/manage_overviews") ? "active" : ""}
          onClick={() => navigate("/manage_overviews")}
        >
          Overviews
        </li>
        <li>Roles</li>
        <li>Organizations</li>
        <li>Templates</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
