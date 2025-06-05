const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async function (context, req) {
  const { name, email, time } = req.body;

  const msg = {
    to: email,
    from: "youremail@example.com", // your verified sender
    subject: "Appointment Confirmed",
    text: `Hi ${name}, your appointment at ${time} has been booked!`,
  };

  try {
    await sgMail.send(msg);
    context.res = {
      status: 200,
      body: { message: "Email sent successfully!" },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: { message: "Failed to send email", error: error.message },
    };
  }
};
