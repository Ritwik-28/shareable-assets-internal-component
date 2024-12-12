import React from 'react';
import { Program } from '../types';
import ButtonRow from './ButtonRow';

interface ProgramCardProps {
  program: Program;
  onSendWhatsApp: (text: string) => void;
  onProgramClick: (programName: string) => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, onSendWhatsApp, onProgramClick }) => {
  return (
    <div className="button-container">
      <div className="main-btn-container">
        <button 
          className="main-btn" 
          onClick={() => onProgramClick(program.name)}
        >
          <img src={program.image} alt={program.displayName} />
        </button>
        {program.buttons.map((button) => (
          <ButtonRow
            key={button.id}
            button={button}
            programId={program.id}
            onSendWhatsApp={onSendWhatsApp}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramCard;