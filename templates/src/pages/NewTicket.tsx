import Sidebar from '../components/Sidebar';
import '../styles/new_ticket.css';

const NewTicket = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <h1>New Ticket</h1>

        <div className="ticket-buttons">
          <button className="btn received"> Received Call</button>
          <button className="btn outbound"> Outbound Call</button>
          <button className="btn email">Send Email</button>
        </div>

        <form className="ticket-form">
          <label htmlFor="title">Title *</label>
          <input type="text" id="title" placeholder="Enter ticket title" />

          <label htmlFor="customer">Customer *</label>
          <input type="email" id="customer" placeholder="Enter customer email" />

          <label htmlFor="text">Text</label>
          <textarea id="text" placeholder="Describe the issue" />

          <a className="attachment-link">select attachment...</a>

          <label htmlFor="owner">Owner</label>
          <input type="text" id="owner" placeholder="Owner name" />

          <label htmlFor="state">State *</label>
          <select id="state">
            <option value="new">new</option>
            <option value="open">open</option>
            <option value="closed">closed</option>
          </select>

          <label htmlFor="priority">Priority *</label>
          <select id="priority">
            <option value="2">2 normal</option>
            <option value="1">1 high</option>
            <option value="3">3 low</option>
          </select>
        </form>
      </main>
    </div>
  );
};

export default NewTicket;
