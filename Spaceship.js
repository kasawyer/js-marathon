

class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew = [];
    this.propulsion = null;
  }

  mountPropulsion(rocket) {
    this.propulsion = rocket;
    console.log("Mounted Propulsion to the spaceship!");
  }

  captain() {
    let totalCrewMembers = this.crew.length;
    let randomNumber = Math.floor(Math.random() * totalCrewMembers);
    return this.crew[randomNumber];
  }

  loadCrew(crew) {
    crew.forEach((newMember) => {
      this.crew.push(newMember);
      console.log(`${newMember.name} has boarded!`);
    });
  }

  takeoff(){
    if (this.propulsion.fire()){
      console.log("NOOOLLLLAAAAANNNNNN!!!!");
    }
    else {
      console.log("nolan");
    }
  }
}
module.exports = Spaceship;
