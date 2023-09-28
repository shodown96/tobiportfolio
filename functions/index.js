const functions = require('firebase-functions');
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({
  origin: true
});
const API_KEY = functions.config().sendgrid.key;
const TO_EMAIL = functions.config().emails.to;
const FROM_EMAIL = functions.config().emails.from;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//   NOTE THAT THIRD PARTY APPLICATIONS DONT RUN WITHOUT PAID PLANS, 
//   AND ENSURE TO CHANGE YOU NODE VERSION IN package.json to 10
// "engines": {
//     "node": "8"
//   },

exports.emailMessage = functions.https.onRequest((req, res) => {
    const { name, email, phone, message } = req.body;
    return cors(req, res, () => {
      var text = `<div>
        <h4>Information</h4>
        <ul>
          <li>
            Name - ${name || ""}
          </li>
          <li>
            Email - ${email || ""}
          </li>
          <li>
            Phone - ${phone || ""}
          </li>
        </ul>
        <h4>Message</h4>
        <p>${message || ""}</p>
      </div>`;
      const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: `${name} sent you a new message`,
        text: text,
        html: text
      };
      sgMail.setApiKey(
        // "SENDGRID API KEY"
        API_KEY
      );
      sgMail.send(msg)
      .then(()=> res.status(200).send({ "message":"success" } ))
      .catch((e) => res.status(500).send({ "message":"error", "error": e } ));
    })
  });