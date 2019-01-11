const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const issue123 = require("./index");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Parse Application/JSON
app.use(bodyParser.json());

//Home Rout
app.post("/", issue123.convT);
//app.get("/", issue123.convT);

app.post("/issue3", issue123.getStep);

//Start Server
app.listen(4200, () => {
  console.log("App listenimg on port 4200!");
});
