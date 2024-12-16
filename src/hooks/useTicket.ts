import { useState } from 'react';
import { ReservationData, Ticket } from '../types/reservation';
import { ticketService } from '../services/ticketService';
import { validatePhone, validateName } from '../utils/validation';

export const useTicket = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTicket = async (data: ReservationData): Promise<Ticket | null> => {
    try {
      setIsLoading(true);
      setError(null);

      // Validation
      if (!validateName(data.firstName)) {
        throw new Error('Le prénom doit contenir au moins 2 caractères');
      }
      if (!validateName(data.lastName)) {
        throw new Error('Le nom doit contenir au moins 2 caractères');
      }
      if (!validatePhone(data.phone)) {
        throw new Error('Format de téléphone invalide (ex: +225 0777791945)');
      }

      const response = await ticketService.createTicket(data);
      
      if (response.error) {
        throw new Error(response.error);
      }

      return response.data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createTicket,
    isLoading,
    error
  };
};