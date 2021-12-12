//Write reusable code with functions
function ourReusableFunction(){
    console.log("Heyya, World");
}

ourReusableFunction();

//Passing arguments to function
function ourFunctionWithArgs(a,b){
    console.log(a-b);
}

ourFunctionWithArgs(10,5);

//Global and local variables
var myGlobal = 10;
function fun1(){
    oopsGlobal=5;
}

function fun2() {
    var output = '';
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal; 
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}
fun1();
fun2();

//Return Value from function
function minusSeven(num){
    return num -7;
}

console.log(minusSeven(10))

//Stand in Line
function nextInLine(arr, item){
    arr.push(item);
    return arr;
}

var testArr = [1,2,3,4,5];

console.log("BEFORE: " + JSON.stringify(testArr))
console.log(nextInLine(testArr, 6));
console.log("AFTER: " + JSON.stringify(testArr));