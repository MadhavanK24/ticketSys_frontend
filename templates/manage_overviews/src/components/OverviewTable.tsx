import React from 'react';
import '../styles/manage.css';

const data = [
  { name: "My Assigned Tickets", link: "my_assigned", role: "Agent", position: 1000 },
  { name: "Unassigned & Open Tickets", link: "all_unassigned", role: "Agent", position: 1010 },
  { name: "Escalated Tickets", link: "all_escalated", role: "Agent", position: 1050 },
  { name: "My Tickets", link: "my_tickets", role: "Customer", position: 1100 },
];

const OverviewTable = () => {
  return (
    <div className="table-container">
      <h2>Overview Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Link</th>
            <th>Available For</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {data.map((overview, index) => (
            <tr key={index}>
              <td>{overview.name}</td>
              <td>{overview.link}</td>
              <td>{overview.role}</td>
              <td>{overview.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OverviewTable;
