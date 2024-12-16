import React, { useState } from 'react';
import { ReservationData } from '../types/reservation';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
  isLoading: boolean;
}

export default function ReservationForm({ onSubmit, isLoading }: ReservationFormProps) {
  const [formData, setFormData] = useState<ReservationData>({
    firstName: '',
    lastName: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Prénom</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent
                   transition-all duration-200 ease-in-out transform hover:scale-[1.01]"
          placeholder="Ex: Chris"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent
                   transition-all duration-200 ease-in-out transform hover:scale-[1.01]"
          placeholder="Ex: King"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent
                   transition-all duration-200 ease-in-out transform hover:scale-[1.01]"
          placeholder="+225 0777791945"
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold
                 transform transition-all duration-200 hover:bg-red-700 hover:scale-[1.02]
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Génération en cours...
          </span>
        ) : (
          'Générer mon ticket'
        )}
      </button>
    </form>
  );
}