import { Ticket, ReservationData } from '../types/reservation';
import { generateTicketId } from '../utils/ticketGenerator';

const STORAGE_KEY = 'bmf_tickets';

export const storageService = {
  createTicket(data: ReservationData): Ticket {
    const tickets = this.getAllTickets();
    const ticketId = generateTicketId();
    
    const newTicket: Ticket = {
      id: ticketId,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      date: new Date().toISOString(),
      eventDetails: {
        name: 'BMF PARTY',
        date: '20 DÉCEMBRE 2024',
        location: 'GRAND BASSAM (ROSIER6)',
        time: '14H À L\'AUBE'
      }
    };

    tickets.push(newTicket);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
    return newTicket;
  },

  getTicket(id: string): Ticket | null {
    const tickets = this.getAllTickets();
    return tickets.find(ticket => ticket.id === id) || null;
  },

  getAllTickets(): Ticket[] {
    const ticketsJson = localStorage.getItem(STORAGE_KEY);
    return ticketsJson ? JSON.parse(ticketsJson) : [];
  }
};