import React from 'react';

interface InputPanelProps {
  learnerName: string;
  learnerNumber: string;
  onNameChange: (value: string) => void;
  onNumberChange: (value: string) => void;
  nameError: string;
  numberError: string;
}

const InputPanel: React.FC<InputPanelProps> = ({
  learnerName,
  learnerNumber,
  onNameChange,
  onNumberChange,
  nameError,
  numberError,
}) => {
  return (
    <div className="input-panel">
      <div className="input-group">
        <input
          type="text"
          id="learnerName"
          placeholder="Learner's Name"
          value={learnerName}
          onChange={(e) => onNameChange(e.target.value)}
          className={nameError ? 'error shake' : ''}
        />
        {nameError && <span className="error-message">{nameError}</span>}
      </div>
      <div className="input-group">
        <input
          type="text"
          id="learnerNumber"
          placeholder="Learner's Number"
          value={learnerNumber}
          onChange={(e) => onNumberChange(e.target.value)}
          className={numberError ? 'error shake' : ''}
        />
        {numberError && <span className="error-message">{numberError}</span>}
      </div>
    </div>
  );
};

export default InputPanel;