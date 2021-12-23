var firstName = "Alan";
var lastName = "Turing";

//escapin literals

var myString  = " I ame \"double quoed\" string instide \"double quotes";

console.log(myString)

var newString = `'I am "double quoted string insde one quote"'`;

console.log(newString)

//Escape sequence 

/*
\n
\t
\r
\b
\f
*/

var myStr = "First Line\n\t\\ SecondLine\r Wow"
console.log(myStr);

//String concatination

var OueString = "I come First. " + "I come second.";

console.log(OueString);

//concatenate string with variables

var ourName = "freeCodeCamp";
var ourStr = "Hello or name is " + ourName + ", how are you?"

console.log(ourStr);

//find length of string

var firstNameLength = 0;
var firstName = "Ada"

firstNameLength = firstName.length

console.log("LENGTH: ",firstNameLength)

//Bracket Notation to find First Character in String
firstLetterOfFirstName = firstName[0];

console.log("FirstLetter: ", firstLetterOfFirstName)

//String immutability

var myStr = "Jello World!";

myStr = "Hello World";

//Bracket Notation to Find Nth Character in String

var secondLetter = firstName[1]

//Find last character of string

var firstName = "Ada";
var lastLetter = firstName[firstName.length -1];

console.log("lastLetter",firstName)

