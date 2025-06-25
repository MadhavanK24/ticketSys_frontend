import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Manage</h2>
      <ul>
        <li>
          <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/overviews" className={({ isActive }) => isActive ? 'active' : ''}>
            Overviews
          </NavLink>
        </li>
        <li><span>Roles</span></li>
        <li><span>Templates</span></li>
      </ul>
    </div>
  );
};

export default Sidebar;
