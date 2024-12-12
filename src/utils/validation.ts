export const validateLearnerInput = (name: string, number: string) => {
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const trimmedName = name.trim();
  const trimmedNumber = number.trim();

  return {
    isNameValid: nameRegex.test(trimmedName),
    isNumberValid: phoneRegex.test(trimmedNumber),
    nameError: !trimmedName 
      ? 'Name is required'
      : !nameRegex.test(trimmedName)
      ? 'Please enter a valid name (2-50 letters only)'
      : '',
    numberError: !trimmedNumber
      ? 'Mobile number is required'
      : !phoneRegex.test(trimmedNumber)
      ? 'Please enter a valid 10-digit mobile number'
      : ''
  };
};