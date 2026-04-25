const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// ---------- LOAD DATA SAFELY ----------
const dbPath = path.join(__dirname, 'data', 'db.json');
let db = {};

try {
  const rawData = fs.readFileSync(dbPath);
  db = JSON.parse(rawData);
} catch (error) {
  console.error('Error loading database:', error);
  db = { steps: [], faqs: [], timeline: [] };
}

// ---------- MIDDLEWARE ----------
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);

app.use(cors());
app.use(express.json());

// ---------- STATIC FRONTEND ----------
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// ---------- API ROUTES ----------
app.get('/api/steps', (req, res) => {
  res.json(db.steps || []);
});

app.get('/api/faqs', (req, res) => {
  res.json(db.faqs || []);
});

app.get('/api/timeline', (req, res) => {
  res.json(db.timeline || []);
});

// ---------- CHATBOT ----------
app.post('/api/ask', (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  const query = question.toLowerCase();
  let response =
    "I'm sorry, I don't have information on that. Try asking about registration, ID, or voting methods.";

  if (query.includes('register') || query.includes('registration')) {
    response =
      'You can register online, by mail, or in person at your local election office.';
  } else if (query.includes('id') || query.includes('identification')) {
    response =
      "Accepted IDs include a driver's license, passport, or state-issued ID depending on your region.";
  } else if (query.includes('mail') || query.includes('absentee')) {
    response =
      'Most regions offer absentee or mail-in voting. You need to request a ballot beforehand.';
  } else if (query.includes('step') || query.includes('process')) {
    response =
      'Steps include: Registration → Research Candidates → Locate Polling Station → Vote.';
  }

  res.json({
    answer: response,
    suggestedQuestions: [
      'How do I register?',
      'What ID is required?',
      'Can I vote by mail?'
    ]
  });
});

// ---------- HEALTH CHECK ----------
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// ---------- ERROR HANDLER ----------
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// ---------- SPA FALLBACK (IMPORTANT: LAST) ----------
app.use((req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
