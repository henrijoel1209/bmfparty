export interface ReservationData {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface Ticket {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  date: string;
  eventDetails: {
    name: string;
    date: string;
    location: string;
    time: string;
  };
}

export interface TicketResponse {
  data: Ticket | null;
  error: string | null;
}