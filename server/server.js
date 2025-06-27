
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

// Admin credentials
const ADMIN_EMAIL = 'nikhildamre17@gmail.com';
const ADMIN_PASSWORD = '123456';

// Admin authentication middleware
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }
  
  const token = authHeader.substring(7);
  
  // Simple token validation (in production, use JWT)
  if (token === Buffer.from(`${ADMIN_EMAIL}:${ADMIN_PASSWORD}`).toString('base64')) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};

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

// Admin login endpoint
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = Buffer.from(`${email}:${password}`).toString('base64');
    res.json({ 
      success: true, 
      token: token,
      message: 'Login successful'
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid email or password'
    });
  }
});

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

// Admin endpoints (protected)
app.get('/api/admin/registrations', authenticateAdmin, async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'registrations.json');
    const data = await fs.readFile(filePath, 'utf8');
    const registrations = JSON.parse(data);
    res.json(registrations);
  } catch (error) {
    res.json([]);
  }
});

app.get('/api/admin/papers', authenticateAdmin, async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'papers.json');
    const data = await fs.readFile(filePath, 'utf8');
    const papers = JSON.parse(data);
    res.json(papers);
  } catch (error) {
    res.json([]);
  }
});

app.get('/api/admin/contacts', authenticateAdmin, async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'contacts.json');
    const data = await fs.readFile(filePath, 'utf8');
    const contacts = JSON.parse(data);
    res.json(contacts);
  } catch (error) {
    res.json([]);
  }
});

// Download endpoints for Excel (protected)
app.get('/api/admin/download/:type/excel', authenticateAdmin, async (req, res) => {
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

// Download endpoints for PDF (protected)
app.get('/api/admin/download/:type/pdf', authenticateAdmin, async (req, res) => {
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

// Email notification endpoint
app.post('/api/admin/send-email', authenticateAdmin, async (req, res) => {
  try {
    const { type, recipientId } = req.body;
    
    // In a real application, you would integrate with email services like:
    // - SendGrid, Mailgun, AWS SES, etc.
    // - Use nodemailer with SMTP
    
    console.log(`Sending ${type} email to recipient ${recipientId}`);
    
    // Simulate email sending
    const emailTemplates = {
      confirmation: 'Registration confirmation email',
      acceptance: 'Paper acceptance notification',
      rejection: 'Paper rejection notification',
      reminder: 'Event reminder email'
    };
    
    res.json({ 
      success: true, 
      message: `${emailTemplates[type] || 'Email'} sent successfully!`
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Certificate generation endpoint
app.post('/api/admin/generate-certificate/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    
    // In a real application, you would:
    // - Use libraries like PDFKit, jsPDF, or Puppeteer
    // - Load registration data to populate certificate
    // - Generate PDF with participant name, event details, etc.
    
    const certificateHTML = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            .certificate { border: 10px solid #gold; padding: 50px; margin: 20px; }
            .title { font-size: 48px; color: #333; margin-bottom: 30px; }
            .subtitle { font-size: 24px; color: #666; margin-bottom: 20px; }
            .name { font-size: 36px; color: #000; font-weight: bold; margin: 30px 0; }
            .details { font-size: 18px; color: #333; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="certificate">
            <h1 class="title">CERTIFICATE OF PARTICIPATION</h1>
            <p class="subtitle">International Conference on Engineering & Technology</p>
            <p class="details">This is to certify that</p>
            <p class="name">[PARTICIPANT NAME]</p>
            <p class="details">has successfully participated in the conference</p>
            <p class="details">Date: March 15-17, 2025</p>
            <p class="details">Certificate ID: CERT-${id}-${Date.now()}</p>
          </div>
        </body>
      </html>
    `;
    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', `attachment; filename="certificate_${id}.html"`);
    res.send(certificateHTML);
  } catch (error) {
    console.error('Error generating certificate:', error);
    res.status(500).json({ error: 'Failed to generate certificate' });
  }
});

// QR Code generation endpoint
app.post('/api/admin/generate-qr/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    
    // In a real application, you would:
    // - Use libraries like qrcode, node-qrcode
    // - Generate QR code with registration details
    // - Return PNG image
    
    const qrData = {
      registrationId: id,
      eventName: "International Conference on Engineering & Technology",
      date: "March 15-17, 2025",
      venue: "IIT Delhi",
      generatedAt: new Date().toISOString()
    };
    
    // Simple text-based QR placeholder
    const qrText = `QR Code for Registration: ${id}\n${JSON.stringify(qrData, null, 2)}`;
    
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', `attachment; filename="qr_code_${id}.txt"`);
    res.send(qrText);
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

// Bulk delete endpoint
app.post('/api/admin/bulk-delete', authenticateAdmin, async (req, res) => {
  try {
    const { type, ids } = req.body;
    const filePath = path.join(__dirname, 'data', `${type}.json`);
    
    let data = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      data = JSON.parse(fileData);
    } catch {
      data = [];
    }
    
    // Filter out items with IDs in the delete list
    const updatedData = data.filter(item => !ids.includes(item.id));
    
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
    
    res.json({ 
      success: true, 
      message: `${ids.length} items deleted successfully`,
      deletedCount: ids.length
    });
  } catch (error) {
    console.error('Error bulk deleting:', error);
    res.status(500).json({ success: false, message: 'Failed to delete items' });
  }
});

// Payment integration endpoint (placeholder)
app.post('/api/payment/process', async (req, res) => {
  try {
    const { amount, currency, paymentMethod, registrationId } = req.body;
    
    // In a real application, integrate with payment gateways like:
    // - Razorpay (popular in India)
    // - Stripe
    // - PayPal
    // - Paytm
    
    console.log(`Processing payment: ₹${amount} for registration ${registrationId}`);
    
    // Simulate payment processing
    const paymentResult = {
      success: true,
      transactionId: `TXN_${Date.now()}`,
      amount: amount,
      currency: currency || 'INR',
      status: 'completed',
      timestamp: new Date().toISOString()
    };
    
    res.json(paymentResult);
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, message: 'Payment processing failed' });
  }
});

// Paper review system endpoint
app.post('/api/admin/review-paper', authenticateAdmin, async (req, res) => {
  try {
    const { paperId, reviewerId, score, comments, recommendation } = req.body;
    
    const reviewData = {
      id: Date.now(),
      paperId,
      reviewerId,
      score,
      comments,
      recommendation, // 'accept', 'reject', 'minor_revision', 'major_revision'
      timestamp: new Date().toISOString()
    };
    
    await ensureDataDir();
    const filePath = path.join(__dirname, 'data', 'reviews.json');
    
    let reviews = [];
    try {
      const data = await fs.readFile(filePath, 'utf8');
      reviews = JSON.parse(data);
    } catch {
      reviews = [];
    }
    
    reviews.push(reviewData);
    await fs.writeFile(filePath, JSON.stringify(reviews, null, 2));
    
    res.json({ success: true, message: 'Review submitted successfully', reviewId: reviewData.id });
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ success: false, message: 'Failed to submit review' });
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
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Admin login: nikhildamre17@gmail.com / 123456`);
});
