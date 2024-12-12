export const createWhatsAppUrl = (phoneNumber: string, text: string, learnerName: string) => {
  const fullNumber = '+91' + phoneNumber;
  const formattedText = text.replace('{LEARNER_NAME_PLACEHOLDER}', learnerName);
  const encodedText = encodeURIComponent(formattedText).replace(/%5Cn/g, '%0A');
  
  return `https://web.whatsapp.com/send?phone=${fullNumber}&text=${encodedText}`;
};