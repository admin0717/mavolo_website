// import sendgrid from "@sendgrid/mail";
import nodemailer from "nodemailer";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  console.log(req.body);
  try {
    console.log("email sending started");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    await transporter.sendMail({
      to: "support@mavolo.in", // Your email where you'll receive emails
      from: "barundebnath91@gmail.com", // your website email address here
      subject: `Mavolo Website Query: ${req.body.fullname} : ${req.body.phone}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Hi Team,</h3>
              <h4>You have a new customer query. Please find the details below:</h4>
              <div style="font-size: 16px;">
              <p>Name: ${req.body.fullname}</p>
			  <p>Email: ${req.body.email}</p>
			    <p>Phone: ${req.body.phone}</p>
          <p>Category: ${req.body.topic}</p>
              <p>Message: ${req.body.query}</p>
              <br>
              </div>
          <p>Thanks</p>
          <p>Mavolo Support</p>
              </div>
      </body>
      </html>`,
    });
    console.log("email sent");
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  console.log("email sending done");

  return res.status(200).json({ error: "" });
}

export default sendEmail;
