const Converter = require("./classes/issue1");
const Stepper = require("./classes/issue3");

module.exports.convT = (req, res) => {
  let input = req.body;
  console.log(input);
  let temp = Number(input.temp);
  let key = input.key.toUpperCase();
  let val = new Converter(temp, key);
  res.send(val);
};

module.exports.getStep = (req, res) => {
  let input = req.body;
  let first = input.value;
  let us1pos;
  let us2pos;
  let u1ch = +input.user1 * 10;
  let u2ch = +input.user2 * 10;
  if (first === "User1") {
    us1pos = true;
    us2pos = false;
  }
  if (first === "User2") {
    us1pos = false;
    us2pos = true;
  }
  let val = new Stepper(u1ch, u2ch, us1pos, us2pos);
  console.log(val);
  res.send(val.res);
};
