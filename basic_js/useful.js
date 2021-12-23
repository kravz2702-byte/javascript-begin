//Generate Random Fractions

function randomFraction(){

    return Math.random();
}

console.log(randomFraction());

//Generate Whole number

function randomWholeNumber(){
    return Math.floor(Math.random()*10);
}

console.log(randomWholeNumber());

function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax-myMin+1)) + myMin;
}

var myRandom = randomRange(5,15)

console.log(myRandom)

// ParseInt function
function convertToInteger(str){
    return parseInt(str, 2);
}

//Ternary Operator condition ? if true: if false

function checkEqual(a,b){
    return a===b ? true : false;
}


//Multiple ternary operators

function checkSign(num){
    
    return num>0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10));

//var vs let

var catName = "Quincy";
var quote;

var catName = "Beau";


function catTalk(){
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
    return quote;
}

console.log(catTalk(quote))

//Compare Scopes of the var and let Keywords
function checkScope(){
    "use strict";
    var i = "function scope";
    if (true){
        var i ="block scope";
        console.log("Block scope is: ", i);
    }
    console.log("Function scope is: ", i);
}

checkScope()

//const

function printMannyTimes(str){
    "use strict";
    const SENTENCE = str + "is cool!";
    for (let i=0; i<str.length;i++){
        console.log(SENTENCE);
    }
}

//mutate an array declared wuith const

const s = [7,5,2]

function editPlace(){
    "use strict";

    s[0]=2;
    s[1]=7;
    s[2]=5;

}

editPlace();
console.log(s);

//Prevent object mutation

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI:3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI=99;
    } catch (ex){
        console.log("ow nou");
    }

    return MATH_CONSTANTS.PI
}


//use arrow functions for concise anonymous functions
const magic = () => new Date();

//Arrow func with params

const myConcat = (arr1, arr2)=> arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));


//Write Higher Order Arrow Functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const SquareList = (arr) =>{
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x=>x*x);
    return squaredIntegers;
}

//Rest operator with arrow function parameters

const sum =(function() {
    return function sum(...args){
        return args.reduce((a,b) => a+b,0)
    };
})();

console.log(sum(1,2,3,4,5))