// Simple storage utility using localStorage
export const storage = {
  saveTicket: (ticket: any) => {
    const tickets = storage.getAllTickets();
    tickets.push(ticket);
    localStorage.setItem('bmf_tickets', JSON.stringify(tickets));
    return ticket;
  },

  getAllTickets: () => {
    const tickets = localStorage.getItem('bmf_tickets');
    return tickets ? JSON.parse(tickets) : [];
  },

  getTicket: (id: string) => {
    const tickets = storage.getAllTickets();
    return tickets.find((ticket: any) => ticket.id === id);
  }
};