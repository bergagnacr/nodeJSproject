const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Create the transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  //Define the email option
  const mailOptions = {
    from: 'Cristian Sarmiento <bergagnacr@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //   html:
  };

  //Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
