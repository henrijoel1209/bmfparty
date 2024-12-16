import React, { useState } from 'react';
import { ReservationData, Ticket } from '../types/reservation';
import { useTicket } from '../hooks/useTicket';
import ReservationForm from './ReservationForm';
import TicketQRCode from './TicketQRCode';

interface ReservationModalProps {
  onClose: () => void;
}

export default function ReservationModal({ onClose }: ReservationModalProps) {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const { createTicket, isLoading, error } = useTicket();

  const handleSubmit = async (data: ReservationData) => {
    const newTicket = await createTicket(data);
    if (newTicket) {
      setTicket(newTicket);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black p-8 rounded-lg max-w-md w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4">Réservation BMF Party</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {!ticket ? (
          <>
            <p className="mb-6">Remplissez le formulaire pour obtenir votre ticket</p>
            <ReservationForm onSubmit={handleSubmit} isLoading={isLoading} />
          </>
        ) : (
          <TicketQRCode ticket={ticket} />
        )}
        
        <div className="text-sm text-gray-600 my-6">
          <p>• Entrée 100% gratuite</p>
          <p>• L'apport d'une bouteille est obligatoire</p>
          <p>• Ticket valable pour une personne</p>
        </div>
        
        <button
          onClick={onClose}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}