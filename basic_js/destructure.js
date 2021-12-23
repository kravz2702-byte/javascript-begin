

const AVG_TEMPRATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const {tomorrow:tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPRATURES)); // 79

//Destructuring Assignment with nested objects

const LOCAL_FORECAST = {
    today : {min:72, max: 83},
    tomorrow: {min:73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";

    const {tomorrow : {max: maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Destructuring Assignment to assign variables from array

const [z,x, , y] = [1,2,3,4,5,6];
console.log(z,x, y);

let a = 8, b=6;

(()=> {
    "use strict";
    [a,b] = [b,a];
})();
console.log(a);
console.log(b);

//Simple Fields

const createPerson = (name, age, gender) => ({name, age, gender})

console.log(createPerson('Zodiac Hasbro', 56, "male"))


//Class Syntax
class SpaceShuttle {
constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
}}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);


//use getters and setters 

class Book {
    constructor(author){
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }

    //setter
    set writer(updateAuthor){
        this._author = updateAuthor;
    }

}


