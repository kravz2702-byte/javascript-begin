var ourDog = {
    "name":"Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}

//dot notation

var dotName = ourDog.name

//Bracket notation

var bracketName = ourDog['name']

//Variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

var playerNumber = 16;
var player = testObj[playerNumber];

//Updating Object Properties

ourDog.name = "Happy Camper";

//Add new properties to an Object

ourDog.barck = "bow-bow";

//delete properties

delete ourDog.barck


//Objects for lookups

function phoneticLookup(val){
    var result = "";

    var lookup ={
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank",
    }
    result = lookup[val];
    return result;
}

//Testing Objects for Properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};


function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp]
    } else {
        return "Not Found"
    }
}


//Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold":true
},
{
    "artist": "Beau Carens",
    "title": "Cereal Man",
    "release year": 2003,
    "formats": [
        "Youtube Video"
    ]
}
];

var myStorage ={
    "car": {
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"]

//record collection

var collection = {
    "2548":{
        "album": "Slippery when Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You GIve Love a Bad Name"
        ]
    },
    "2468":{
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist":"Robert Palmer",
        "tracks":[]
    },
    "5349":{
        "album":"ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection))

function updateRecords(id, prop, value){
    if (value=== ""){
        delete collection[id][prop];
    } else if (prop==="tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

updateRecords(2468, "tracks", "tests")
console.log(updateRecords(5349, "artist", "ABBA"));

//iterate wuth loops

var myArr =[];

var i = 0;
while(i<5) {
    myArr.push(i);
    i++;
}
console.log(myArr)

// iterate with loop

var ourArray = [];
for (var i = 0; i < 5; i++){
    ourArray.push(i);
}

console.log(ourArray);

//iterate odd numbers with FOR LOOP

var ourArray = [];

for (var i =0; i < 10; i+=2){
    ourArray.push(i);
}

console.log("Odd nums",ourArray);

var ourArray =[];
//count backwards wit a FOR LOOP
for (i=10; i >0; i -=2){
    ourArray.push(i);
}

console.log("Backward count", ourArray)

//iterate through array with for loop

var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++){
    ourTotal += ourArray[i];
}
console.log(ourTotal);

//Nesting for loops
function multiplyAll(arr){
    var product = 1;

    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr[i].length; j++){
            product *= arr[i][j];
        }
    }

    return product
}

var product = multiplyAll([[1,2], [3,4],[5,6,7]])
console.log("PRODUCT",product)

//Do while loop

var myArray = [];
var i = 10;

do{
    myArray.push(i);
    i++;
} while (i<5)

console.log(i, myArray)

//Profile lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": '0512413412',
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "099123456",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {   "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0948732123",
        "likes": ["Intriguing Cases", "Violin"]
    }
];

function findProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i] === name){
            return contacts[i][prop] || "No such property"
        }
    }
}

var data = findProfile("Akira", "lastName");
console.log(data);


