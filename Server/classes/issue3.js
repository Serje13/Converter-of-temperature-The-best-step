class Stepper {
  constructor(user1Chance, user2Chance, first, second) {
    this.user1Chance = user1Chance;
    this.user2Chance = user2Chance;
    this.first = first;
    this.second = second;
    this.calcStep();
  }

  calcStep() {
    this.us1step = 0;
    this.us2step = 0;
    this.res = "";
    if (this.first === false) {
      outer: for (let i = 10; i > 0; i--) {
        this.user2Chance++;
        this.user1Chance++;

        this.us2step++;

        if (this.user1Chance === 10) break outer;
        this.user1Chance++;

        this.user2Chance++;

        this.us1step++;

        if (this.user2Chance === 10) break outer;
      }
      this.res = JSON.parse(
        `[{"key":"User-2", "value":"${
          this.us2step
        }"}, {"key":"User-1", "value": "${this.us1step}"}]`
      );
      return this.res;
    }
    if (this.second === false) {
      outer: for (let i = 10; i > 0; i--) {
        this.user1Chance++;

        this.user2Chance++;

        this.us1step++;

        if (this.user2Chance === 10) break outer;
        this.user2Chance++;

        this.user1Chance++;

        this.us2step++;

        if (this.user1Chance === 10) break outer;
      }
      this.res = JSON.parse(
        `[{"key":"User-1", "value":"${
          this.us1step
        }"}, {"key":"User-2","value":"${this.us2step}"}]`
      );
      return this.res;
    }
  }
}

module.exports = Stepper;
