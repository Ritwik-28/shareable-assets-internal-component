import React from 'react';
import { Button } from '../types';
import WhatsAppButton from './WhatsAppButton';

interface ButtonRowProps {
  button: Button;
  programId: string;
  onSendWhatsApp: (text: string) => void;
}

const ButtonRow: React.FC<ButtonRowProps> = ({ button, programId, onSendWhatsApp }) => {
  return (
    <div className="button-row">
      <a
        href={button.url}
        className="submenu-button"
        id={`main-button-${programId}-${button.id}`}
      >
        {button.label}
      </a>
      <WhatsAppButton
        id={`whatsapp-button-${programId}-${button.id}`}
        text={button.whatsappText}
        onSendWhatsApp={onSendWhatsApp}
      />
    </div>
  );
};

export default ButtonRow;