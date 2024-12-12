import React from 'react';
import programsData from './data/programs.json';
import InputPanel from './components/InputPanel';
import ProgramCard from './components/ProgramCard';
import { useLearnerForm } from './hooks/useLearnerForm';
import { useWhatsApp } from './hooks/useWhatsApp';
import { sendClickDataToGAS } from './utils/analytics';
import './styles/base.css';
import './styles/components/input.css';
import './styles/components/buttons.css';
import './styles/animations.css';

function App() {
  const {
    learnerName,
    learnerNumber,
    setLearnerName,
    setLearnerNumber,
    nameError,
    numberError,
    validateInputs,
  } = useLearnerForm();

  const { handleSendWhatsApp } = useWhatsApp(learnerName, learnerNumber, validateInputs);

  const handleProgramClick = (programName: string) => {
    sendClickDataToGAS(programName, learnerName, learnerNumber);
  };

  return (
    <div className="container">
      <InputPanel
        learnerName={learnerName}
        learnerNumber={learnerNumber}
        onNameChange={setLearnerName}
        onNumberChange={setLearnerNumber}
        nameError={nameError}
        numberError={numberError}
      />
      <div className="buttons">
        {programsData.programs.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
            onSendWhatsApp={handleSendWhatsApp}
            onProgramClick={handleProgramClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;