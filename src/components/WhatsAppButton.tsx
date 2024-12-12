import React from 'react';

interface WhatsAppButtonProps {
  id: string;
  text: string;
  onSendWhatsApp: (text: string) => void;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ id, text, onSendWhatsApp }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSendWhatsApp(text);
  };

  return (
    <a href="#" className="whatsapp-btn" onClick={handleClick} id={id}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;