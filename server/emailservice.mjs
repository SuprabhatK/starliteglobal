import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Needed to resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, phone, email, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: `Contact Us Form Submission: ${subject}`,
            html: `
              <div>
                <img src="cid:logo" alt="Logo" style="height: 60px; margin-bottom: 20px;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
              </div>
            `,
            attachments: [
                {
                    filename: 'logo.png',
                    path: path.join(__dirname, 'logo.png'), // Make sure logo.png is present in your server folder
                    cid: 'logo' // Must match img src="cid:logo"
                }
            ],
            tls: {
                rejectUnauthorized: false
            }
        });

        // Send acknowledgment to user
        await transporter.sendMail({
            from: `"Starlite Global" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'We’ve received your message!',
            html: `
              <div>
                <img src="cid:logo" alt="Logo" style="height: 60px; margin-bottom: 20px;" />
                <p>Hi ${name},</p>
                <p>Thanks for contacting <strong>Starlite Global</strong>. We’ve received your message and will get back to you shortly.</p>
                <p><strong>Your Message Summary:</strong></p>
                <ul>
                  <li><strong>Subject:</strong> ${subject}</li>
                  <li><strong>Message:</strong> ${message}</li>
                </ul>
                <p>Regards,<br>Team Starlite Global<br>Tel:85-21349717</p>
              </div>
            `,
            attachments: [
                {
                    filename: 'logo.png',
                    path: path.join(__dirname, 'logo.png'),
                    cid: 'logo'
                }
            ],
            tls: {
                rejectUnauthorized: false
            }
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Email failed to send' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
