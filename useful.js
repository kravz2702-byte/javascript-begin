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
