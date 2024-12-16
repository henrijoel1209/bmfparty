import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { toPng } from 'html-to-image';
import { Ticket } from '../types/reservation';
import { Crown, Download } from 'lucide-react';

interface TicketQRCodeProps {
  ticket: Ticket;
}

export default function TicketQRCode({ ticket }: TicketQRCodeProps) {
  const ticketRef = useRef<HTMLDivElement>(null);

  const downloadTicket = async () => {
    if (ticketRef.current) {
      try {
        const dataUrl = await toPng(ticketRef.current, {
          quality: 1.0,
          pixelRatio: 2,
          cacheBust: true,
        });
        
        const link = document.createElement('a');
        link.download = `BMF-Party-Ticket-${ticket.id}.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating ticket:', error);
        alert('Une erreur est survenue lors du téléchargement du ticket. Veuillez réessayer.');
      }
    }
  };

  return (
    <div className="text-center animate-fade-in">
      <div 
        ref={ticketRef}
        className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 p-8 rounded-2xl 
                 shadow-2xl ticket-shadow max-w-sm mx-auto text-white transform 
                 transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <Crown className="w-12 h-12 text-red-500" />
          </div>
        </div>
        
        <h3 className="text-3xl font-bold mb-4">BMF PARTY</h3>
        <p className="text-sm mb-6 opacity-90">20 DÉCEMBRE 2024 - GRAND BASSAM</p>
        
        <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-lg transform transition-transform hover:scale-105">
          <QRCodeSVG
            value={JSON.stringify(ticket)}
            size={200}
            level="H"
            includeMargin={true}
            className="mx-auto"
          />
        </div>
        
        <div className="text-sm space-y-3 text-left bg-black/20 p-4 rounded-lg">
          <p><strong>Nom:</strong> {ticket.lastName}</p>
          <p><strong>Prénom:</strong> {ticket.firstName}</p>
          <p><strong>Téléphone:</strong> {ticket.phone}</p>
          <p><strong>ID Ticket:</strong> {ticket.id}</p>
        </div>
      </div>

      <button
        onClick={downloadTicket}
        className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold
                 inline-flex items-center space-x-2 transform transition-all duration-200 
                 hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 
                 focus:ring-red-500 focus:ring-offset-2"
      >
        <Download className="w-5 h-5" />
        <span>Télécharger mon ticket</span>
      </button>
    </div>
  );
}