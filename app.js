//these two variables need to be edited
const accountSid = "AC0beb3a487c9fdd204f74b5cb26cc9976";
const authToken = "09df2b97732331ccd09e151053791b7d";

const app = require("express")();
const client = require("twilio")(accountSid, authToken);

app.get("/message/:message/:phoneNumber", (req, res) => {
  client.messages
    .create({
        
        //this from key need to be changed
      from: "+12055832557",
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
