

let rocket = {
  fuel: 0,
  addFuel(int) {
    this.fuel += int;
    console.log(`${this.fuel} fuels.`);
  },
  fire() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Engines have been fired!");
      console.log(`Current fuel amount: ${this.fuel} fuels`);
      return true;
    }
    else {
      console.log("Engines failed to fire :(");
      return false;
    }
  }
};

module.exports = rocket;
