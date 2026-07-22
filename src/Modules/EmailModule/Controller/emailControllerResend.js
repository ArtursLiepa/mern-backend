require("dotenv").config();
const { Resend } = require("resend");
const emails = require("../Model/emailModel");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmailResend(req, res) {
  const { name, email, subject, message } = req.body;

  try {
    const emailRecord = await emails.create({
      name: name,
      email: email,
      subject: subject,
      message: message,
      emailStatus: "pending",
    });

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_DOMAIN,
      to: process.env.EMAIL_ADRESS,
      //   cc: email,
      replyTo: email,
      subject: subject,
      html: `
      <div>
  <h1>Jauna ziņa no mājaslapas</h1>
  <p><strong>Vārds:</strong> ${name}</p>
  <p><strong>${message}</strong></p>
</div>`,
    });
    if (error) {
      throw new Error(error.message);
    }

    console.log("E-pasts nosūtīts!");
    console.log(data);

    const emailRecordUpdate = await emails.findByIdAndUpdate(
      emailRecord._id,
      {
        emailStatus: "sent",
        messageId: data.id,
      },
      { new: true },
    );
    if (emailRecordUpdate) {
      console.log(`email status: ${emailRecordUpdate.emailStatus}`);
    }

    return res.status(200).json({
      success: "sent",
      message: {
        approve: "Email sent successfully!",
        thanks: "Thank you for contacting me!",
        contact: "I'll send my response to your email address.",
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: "error",
      message: {
        expression: `Oooopsss....🤦‍♂️`,
        content: "Something went wrong!",
      },
    });
  }
}

module.exports = { sendEmailResend };
