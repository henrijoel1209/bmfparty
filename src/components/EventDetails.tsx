import React from 'react';
import { Clock, MapPin } from 'lucide-react';

export default function EventDetails() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-red-900 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">INFORMATIONS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center space-x-4">
            <Clock className="w-8 h-8 text-red-500" />
            <div>
              <h3 className="font-bold mb-1">HORAIRE</h3>
              <p>14H À L'AUBE</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-8 h-8 text-red-500" />
            <div>
              <h3 className="font-bold mb-1">LIEU</h3>
              <p>GRAND BASSAM (ROSIER6)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}