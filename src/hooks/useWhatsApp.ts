import { createWhatsAppUrl } from '../utils/whatsapp';
import { sendClickDataToGAS } from '../utils/analytics';

export const useWhatsApp = (
  learnerName: string,
  learnerNumber: string,
  validateInputs: () => boolean
) => {
  const handleSendWhatsApp = (text: string) => {
    if (!validateInputs()) return;

    const url = createWhatsAppUrl(learnerNumber, text, learnerName);
    window.open(url, '_blank');
    sendClickDataToGAS('whatsapp', learnerName, learnerNumber);
  };

  return { handleSendWhatsApp };
};