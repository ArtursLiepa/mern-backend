require("dotenv").config();
const nodemailer = require("nodemailer");
const {
  getMaxListeners,
} = require("../../HeaderModule/Model/informationModel");
const fs = require("fs");
const emails = require("../Model/emailModel");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmail(req, res) {
  const { name, email, subject, message } = req.body;
  // console.log(name, email, subject, message);
  // let htmltemplate = fs.readFileSync("../Templates/email.html", "utf8");

  try {
    const emailRecord = await emails.create({
      name: name,
      email: email,
      subject: subject,
      message: message,
      emailStatus: "pending",
    });

    const emailInfo = await transporter.sendMail({
      from: process.env.EMAIL_ADRESS,
      to: process.env.EMAIL_ADRESS,
      cc: email,
      // cc: ccAdress,
      subject: subject,
      html: `
      <div>
  <h1>Jauna ziņa no mājaslapas</h1>
  <p><strong>Vārds:</strong> ${name}</p>
  <p><strong>${message}</strong></p>
</div>`,
    });
    if (emailInfo.accepted.length > 0 && emailInfo.rejected.length === 0) {
      console.log("E-pasts nosūtīts!");
      console.log(emailInfo);
      const emailRecordUpdate = await emails.findByIdAndUpdate(
        emailRecord._id,
        {
          emailStatus: "sent",
          messageId: emailInfo.messageId,
          smtpResponse: emailInfo.response,
        },
      );
      console.log(`email status${emailRecordUpdate.emailStatus}`);
      res.status(200).json({
        success: "sent",
        message: {
          approve: "Email sent successfully!",
          thanks: "Thank you for contacting me!",
          contact: "I'll send my response to your email address.",
        },
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      success: "error",
      message: {
        expression: `Oooopsss....🤦‍♂️`,
        content: "Something went wrong!",
      },
    });
  }
}

const handleEmail = () => {};

module.exports = { sendEmail };
