const sendClickDataToGAS = async (
  programName: string,
  learnerName: string,
  learnerNumber: string
): Promise<void> => {
  try {
    const scriptId = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_ID;
    const gasUrl = `https://script.google.com/macros/s/${scriptId}/exec`;
    const params = new URLSearchParams({
      action: 'click',
      programName: programName,
      learnerName: learnerName,
      learnerNumber: learnerNumber,
    });

    const response = await fetch(`${gasUrl}?${params}`);
    await response.text();
  } catch (error) {
    console.error('Analytics Error:', error);
  }
};

export { sendClickDataToGAS };