
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure data directory exists
const ensureDataDir = async () => {
  const dataDir = path.join(__dirname, 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
};

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contactData = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    };

    await ensureDataDir();
    const filePath = path.join(__dirname, 'data', 'contacts.json');
    
    let contacts = [];
    try {
      const data = await fs.readFile(filePath, 'utf8');
      contacts = JSON.parse(data);
    } catch {
      contacts = [];
    }

    contacts.push(contactData);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

    res.json({ success: true, message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Registration form submission
app.post('/api/register', async (req, res) => {
  try {
    const registrationData = {
      id: Date.now(),
      ...req.body,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    await ensureDataDir();
    const filePath = path.join(__dirname, 'data', 'registrations.json');
    
    let registrations = [];
    try {
      const data = await fs.readFile(filePath, 'utf8');
      registrations = JSON.parse(data);
    } catch {
      registrations = [];
    }

    registrations.push(registrationData);
    await fs.writeFile(filePath, JSON.stringify(registrations, null, 2));

    res.json({ 
      success: true, 
      message: 'Registration submitted successfully!',
      registrationId: registrationData.id
    });
  } catch (error) {
    console.error('Error saving registration:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Paper submission
app.post('/api/submit-paper', async (req, res) => {
  try {
    const paperData = {
      id: Date.now(),
      ...req.body,
      timestamp: new Date().toISOString(),
      status: 'submitted'
    };

    await ensureDataDir();
    const filePath = path.join(__dirname, 'data', 'papers.json');
    
    let papers = [];
    try {
      const data = await fs.readFile(filePath, 'utf8');
      papers = JSON.parse(data);
    } catch {
      papers = [];
    }

    papers.push(paperData);
    await fs.writeFile(filePath, JSON.stringify(papers, null, 2));

    res.json({ 
      success: true, 
      message: 'Paper submitted successfully!',
      paperId: paperData.id
    });
  } catch (error) {
    console.error('Error saving paper:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Get all registrations (admin endpoint)
app.get('/api/admin/registrations', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'registrations.json');
    const data = await fs.readFile(filePath, 'utf8');
    const registrations = JSON.parse(data);
    res.json(registrations);
  } catch (error) {
    res.json([]);
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
