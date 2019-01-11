class Converter {
  constructor(temp, key) {
    this.temp = temp;
    this.key = key;
    this.createString();
  }
  createString() {
    if (this.key === "C" || this.key === "С") {
      let f = this.cToF(this.temp);
      let k = this.cToK(this.temp);
      this.strToJson = JSON.parse(`[{${f}},{${k}}]`);
    }
    if (this.key === "F") {
      let c = this.fToC(this.temp);
      let k = this.fToK(this.temp);
      this.strToJson = JSON.parse(`[{${c}},{${k}}]`);
    }
    if (this.key === "K" || this.key === "К") {
      let c = this.kToC(this.temp);
      let f = this.kToF(this.temp);
      this.strToJson = JSON.parse(`[{${c}},{${f}}]`);
    }
  }
  cToF() {
    let val = Math.round((this.temp * 9) / 5 + 32);
    return `"key":"F", "value":"${val}"`;
  }
  cToK() {
    let val = Math.round(this.temp + 273.15);
    return `"key":"K", "value":"${val}"`;
  }
  fToC() {
    let val = Math.round((this.temp - 32) * (5 / 9));
    return `"key":"C", "value":"${val}"`;
  }
  fToK() {
    let val = Math.round((this.temp - 32) * (5 / 9) + 273.15);
    return `"key":"K", "value":"${val}"`;
  }

  kToC() {
    let val = Math.round(this.temp - 273.15);
    return `"key":"C", "value":"${val}"`;
  }
  kToF() {
    let val = Math.round(((this.temp - 273.15) * 9) / 5 + 32);
    return `"key":"F", "value":"${val}"`;
  }
}
module.exports = Converter;
