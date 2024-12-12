import { useState } from 'react';
import { validateLearnerInput } from '../utils/validation';

export const useLearnerForm = () => {
  const [learnerName, setLearnerName] = useState('');
  const [learnerNumber, setLearnerNumber] = useState('');
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const validateInputs = () => {
    const { isNameValid, isNumberValid } = validateLearnerInput(learnerName, learnerNumber);

    setNameError(!isNameValid);
    setNumberError(!isNumberValid);

    return isNameValid && isNumberValid;
  };

  return {
    learnerName,
    learnerNumber,
    setLearnerName,
    setLearnerNumber,
    nameError,
    numberError,
    validateInputs,
  };
};