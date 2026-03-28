const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Resend } = require('resend');

// ── Multer setup ──
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPG, PNG and PDF files are allowed'));
    }
  }
});

// ── POST /api/prescription ──
router.post('/prescription', upload.single('prescription'), async (req, res) => {
  try {
    // ── Resend setup (inside handler so env vars are guaranteed loaded) ──
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, phone } = req.body;
    const file = req.file;

    // Validate
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name and phone number are required.'
      });
    }

    if (!file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload a prescription image.'
      });
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    // ── Send Email via Resend ──
    const { data, error } = await resend.emails.send({
      from: 'Getwell Medicos <onboarding@resend.dev>',
      to: [process.env.OWNER_EMAIL],
      subject: `New Prescription from ${name} — ${phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; border: 1px solid #dde2ea; border-radius: 8px; overflow: hidden;">
          <div style="background: #112240; padding: 20px 24px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 18px;">📋 New Prescription Received</h2>
            <p style="color: #7bb8e0; margin: 4px 0 0; font-size: 13px;">Getwell Medicos — Booth No. 13, Sector 35C, Chandigarh</p>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px; width: 140px;">Customer Name</td>
                <td style="padding: 10px 0; font-weight: bold; color: #112240; font-size: 14px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Phone Number</td>
                <td style="padding: 10px 0; font-weight: bold; color: #112240; font-size: 14px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Received At</td>
                <td style="padding: 10px 0; color: #112240; font-size: 13px;">${timestamp} IST</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 14px; background: #f4f7fa; border-radius: 6px; border-left: 3px solid #4b9fd4;">
              <p style="margin: 0; font-size: 13px; color: #444;">
                The prescription is attached to this email.
                Please call <strong>${name}</strong> back on <strong>${phone}</strong> at your earliest convenience.
              </p>
            </div>
          </div>
          <div style="background: #f4f7fa; padding: 14px 24px; border-top: 1px solid #dde2ea;">
            <p style="margin: 0; font-size: 11px; color: #999;">Getwell Medicos | Booth No. 13, Sector 35C, Chandigarh</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: file.originalname || `prescription_${Date.now()}`,
          content: file.buffer,
        }
      ]
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email. Please try WhatsApp instead.'
      });
    }

    console.log(`✅ Email sent — ${name} (${phone}) — ID: ${data.id}`);
    return res.status(200).json({
      success: true,
      message: 'Prescription received! We will call you back shortly.'
    });

  } catch (err) {
    console.error('❌ Server error:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try WhatsApp instead.'
    });
  }
});

module.exports = router;
