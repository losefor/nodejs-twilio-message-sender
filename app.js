//these two variables need to be edited
const accountSid = "Here goes your account sid";
const authToken = "Here goes your auth token";

const app = require("express")();
const client = require("twilio")(accountSid, authToken);

app.get("/message/:message/:phoneNumber", (req, res) => {
  client.messages
    .create({
        
        //this from key need to be changed
      from: "Here goes your twillio phone number",
      body: req.params.message,
      to: `+964${req.params.phoneNumber}`,
    })
    .then((message) => {
      res.json(message);
    })
    .catch((err) => {
      console.log(err);
    });
});


const port = process.env.PORT || 5050
app.listen(port, () => {
  console.log("started on port 5050");
});
