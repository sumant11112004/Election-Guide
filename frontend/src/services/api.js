const API_URL = '/api';

export const fetchSteps = async () => {
  const res = await fetch(`${API_URL}/steps`);
  if (!res.ok) throw new Error('Failed to fetch steps');
  return res.json();
};

export const fetchTimeline = async () => {
  const res = await fetch(`${API_URL}/timeline`);
  if (!res.ok) throw new Error('Failed to fetch timeline');
  return res.json();
};

export const fetchFaqs = async () => {
  const res = await fetch(`${API_URL}/faqs`);
  if (!res.ok) throw new Error('Failed to fetch FAQs');
  return res.json();
};

export const askAssistant = async (question) => {
  const res = await fetch(`${API_URL}/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question })
  });
  if (!res.ok) throw new Error('Failed to fetch answer');
  return res.json();
};
