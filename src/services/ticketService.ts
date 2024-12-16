import { supabase } from '../lib/supabase';
import { ReservationData, Ticket, TicketResponse } from '../types/reservation';
import { generateTicketId } from '../utils/ticketGenerator';
import { EVENT_DETAILS } from '../config/constants';

export const ticketService = {
  async createTicket(data: ReservationData): Promise<TicketResponse> {
    try {
      const ticketId = generateTicketId();
      
      const ticket: Ticket = {
        id: ticketId,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        date: new Date().toISOString(),
        eventDetails: {
          name: EVENT_DETAILS.name,
          date: EVENT_DETAILS.date,
          location: EVENT_DETAILS.location,
          time: EVENT_DETAILS.time
        }
      };

      const { error } = await supabase
        .from('tickets')
        .insert([ticket]);

      if (error) {
        return { data: null, error: 'Erreur lors de la création du ticket' };
      }

      return { data: ticket, error: null };
    } catch (error) {
      console.error('Ticket creation error:', error);
      return { data: null, error: 'Une erreur inattendue est survenue' };
    }
  }
};