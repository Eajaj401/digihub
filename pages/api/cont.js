// pages/api/contact.js
import mailgun from 'mailgun-js';

const mg = mailgun({ 
  apiKey: '9d35d799cc2ecda957f54fdc20c7c76c-a4da91cf-8dfbd57e', 
  domain: 'sandboxe24e34058aaf40b9ab1cf13df0e60757.mailgun.org' // Replace with your Mailgun domain
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, budget, timeframe, projectDetails } = req.body;

    const data = {
      from: 'Excited User <eajaj401@gmail.com>', // Replace with your Mailgun sender email
      to: 'eajaj401@gmail.com', // Replace with your recipient email
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Budget: ${budget}
        Timeframe: ${timeframe}
        Project Details: ${projectDetails}
      `,
    };

    try {
      await mg.messages().send(data);
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
