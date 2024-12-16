import React from 'react';

const activities = [
  'WELCOME DRINK',
  'CHILL MOMENT',
  'PISCINE PARTY',
  'JEU DE SOCIÉTÉ',
  'ACTION VÉRITÉ',
  'NOURRITURE & BOISSONS'
];

export default function Programme() {
  const midPoint = Math.ceil(activities.length / 2);
  const leftColumn = activities.slice(0, midPoint);
  const rightColumn = activities.slice(midPoint);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">PROGRAMME</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[leftColumn, rightColumn].map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((activity, index) => (
                <div key={index} className="p-4 border border-red-500 hover:bg-red-500/10 transition-colors">
                  <h3 className="font-bold mb-2">{activity}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}