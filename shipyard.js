let rocket = require('./Rocket');
let Spaceship = require ('./Spaceship');
let CrewMember = require ('./CrewMember');


let ourShip = new Spaceship('{Browns}');
let crewNames = ["Don", "Sam", "Nick", "Marjie", "Jon", "Katherine", "Emma", "Amanda", "Warren", "NOLAN"];
let crewArray = [];

let launchPad = (spaceship, crewMembers, rocketObject, fuels)=> {
  console.log(`${spaceship.name}`);
  console.log("Here WE GOOOO!!!!!");
  spaceship.loadCrew(crewMembers);

  let captain = spaceship.captain();
  console.log(`High-five Captain ${captain.name}`);

  spaceship.mountPropulsion(rocketObject);
  rocketObject.addFuel(fuels);

  spaceship.takeoff();


};

let trainCrew = (array) => {
  array.forEach((member) => {
    newCrewMember = new CrewMember(member);
    newCrewMember.trained = true;
    crewArray.push(newCrewMember);
  });
  return crewArray;
};

trainCrew(crewNames);
launchPad(ourShip, crewArray, rocket, 9);
