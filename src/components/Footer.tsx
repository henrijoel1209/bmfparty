import React from 'react';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">RÉSERVATION</h2>
        <div className="flex justify-center space-x-4">
          <Phone className="w-6 h-6" />
          <p>+225 0705964810 / 0779284884 / 0576832001</p>
        </div>
        <p className="mt-8 text-xl font-bold text-red-500">ENTRÉE 100% GRATUITE</p>
      </div>
    </footer>
  );
}