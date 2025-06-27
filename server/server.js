
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

// Serve React static files (build for production, public for development)
const staticPath = process.env.NODE_ENV === 'production' 
  ? path.join(__dirname, '../build')
  : path.join(__dirname, '../public');
app.use(express.static(staticPath));

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

// Admin endpoints
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

app.get('/api/admin/papers', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'papers.json');
    const data = await fs.readFile(filePath, 'utf8');
    const papers = JSON.parse(data);
    res.json(papers);
  } catch (error) {
    res.json([]);
  }
});

app.get('/api/admin/contacts', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'contacts.json');
    const data = await fs.readFile(filePath, 'utf8');
    const contacts = JSON.parse(data);
    res.json(contacts);
  } catch (error) {
    res.json([]);
  }
});

// Download endpoints for Excel
app.get('/api/admin/download/:type/excel', async (req, res) => {
  try {
    const { type } = req.params;
    const filePath = path.join(__dirname, 'data', `${type}.json`);
    
    let data = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      data = JSON.parse(fileData);
    } catch {
      data = [];
    }

    // Convert JSON to CSV (simplified Excel format)
    let csv = '';
    if (data.length > 0) {
      // Headers
      const headers = Object.keys(data[0]);
      csv += headers.join(',') + '\n';
      
      // Data rows
      data.forEach(row => {
        const values = headers.map(header => {
          const value = row[header] || '';
          return `"${value.toString().replace(/"/g, '""')}"`;
        });
        csv += values.join(',') + '\n';
      });
    }

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${type}_${new Date().toISOString().split('T')[0]}.csv"`);
    res.send(csv);
  } catch (error) {
    console.error('Error generating Excel:', error);
    res.status(500).json({ error: 'Failed to generate Excel file' });
  }
});

// Download endpoints for PDF
app.get('/api/admin/download/:type/pdf', async (req, res) => {
  try {
    const { type } = req.params;
    const filePath = path.join(__dirname, 'data', `${type}.json`);
    
    let data = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      data = JSON.parse(fileData);
    } catch {
      data = [];
    }

    // Simple HTML to PDF conversion (basic implementation)
    let html = `
      <html>
        <head>
          <title>${type.toUpperCase()} Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            h1 { color: #333; }
          </style>
        </head>
        <body>
          <h1>${type.toUpperCase()} Report</h1>
          <p>Generated on: ${new Date().toLocaleDateString()}</p>
          <table>
    `;

    if (data.length > 0) {
      // Headers
      const headers = Object.keys(data[0]);
      html += '<tr>';
      headers.forEach(header => {
        html += `<th>${header}</th>`;
      });
      html += '</tr>';

      // Data rows
      data.forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
          html += `<td>${row[header] || ''}</td>`;
        });
        html += '</tr>';
      });
    }

    html += `
          </table>
        </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', `attachment; filename="${type}_${new Date().toISOString().split('T')[0]}.html"`);
    res.send(html);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Failed to generate PDF file' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  const indexPath = process.env.NODE_ENV === 'production'
    ? path.join(__dirname, '../build', 'index.html')
    : path.join(__dirname, '../public', 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
