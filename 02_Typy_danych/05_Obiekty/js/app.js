const car = {
    type: "sedan",
    color: "green",
    engine: 2.5,
};

const carDescription = car.type + " " + car.color + " " + car.engine;

console.log(carDescription);



const color = {
    red: 100,
    green: 0,
    blue: 50,
};

const referenceColor = {
    red: 50,
    green: 50,
};

const new_car = car;
new_car.color = referenceColor;

//Treść zadania zbyt skomplikowana i jak dla mnie niejasna. Więcej już z siebie nie wykrzeszę.