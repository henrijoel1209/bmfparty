import React, { useState } from 'react';
import ReservationModal from './ReservationModal';

export default function ReservationButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold tracking-widest
                 overflow-hidden bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
        <span className="relative">RÉSERVER MAINTENANT</span>
      </button>
      
      {isModalOpen && <ReservationModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}