import React from 'react';
import { Crown } from 'lucide-react';
import ReservationButton from './ReservationButton';
import { EVENT_DETAILS } from '../config/constants';

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${EVENT_DETAILS.images.background})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      <div className="absolute top-4 left-4 w-24 animate-fade-in">
        <div className="flex justify-center items-center h-24 w-24 bg-white rounded-full hover:scale-110 transition-transform duration-300">
          <Crown className="w-16 h-16 text-red-500" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 animate-slide-up">
        <div className="flex justify-center mb-6">
          <Crown className="w-16 h-16 text-white animate-pulse" />
        </div>
        <h1 className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
          {EVENT_DETAILS.name}
        </h1>
        <p className="text-2xl mb-8 text-white font-light tracking-wider">
          {EVENT_DETAILS.date}
        </p>
        <ReservationButton />
      </div>
    </header>
  );
}