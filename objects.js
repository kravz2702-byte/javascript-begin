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