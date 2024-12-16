import React from 'react';

export default function QRCode() {
  // Using a sample QR code image from QR code generator service
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=BMF_PARTY_20_DEC_2024";
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={qrCodeUrl}
        alt="QR Code pour BMF Party"
        className="w-48 h-48"
      />
    </div>
  );
}