'use client'
import React from 'react';

interface WhatsappButtonProps {
  className?: string;
  phoneNumber: string; // e.g., "1234567890" (country code included, no +)
  message: string; // e.g., "I'm interested in your services."
  children: React.ReactNode; // To wrap any content (e.g., an icon or text)
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ className, phoneNumber, message, children }) => {
  const handleClick = () => {
    // URI encode the message to handle spaces and special characters
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in a new tab for a better user experience
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-primary-orange font-bold ${className}`}
      style={{
        color: 'white',
        padding: '8px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {children}
    </button>
  );
};

export default WhatsappButton;