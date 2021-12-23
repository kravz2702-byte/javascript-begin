//Example

function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, It's true";
    }
    return "No, It's false";
}

function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false"
}

console.log(trueOrFalse(true));

//Equality OPerators

function testEqual(val){
    if (val==12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(12))

function testStrict(val){
    if (val===3){
        return 'Equal'
    }
    return "Not Equal"
}

console.log("Strict", testStrict('3'))

//Strict inequality Operator

function testStrictNotEqual(val){
    if (val!==3){
        return "Not Equal"
    }
    return "Equal"
}

console.log("StrictInequality",testStrictNotEqual('3'))

//Comparison operators
function testBiggerThan(val){
    if (val>100){
        return "Over 100"
    }
    if (val>10){
        return "Over 10"
    }
    return "10 or Under"
}

console.log('Comparison: ', testBiggerThan(3))

// Logical and/or operators

function testLogicalOperators(){
    if (val<=50 && val >= 25){
        return "Between 50 and 25"
    }
}

function testLogical(val){
    if (val < 10 || val > 20){
        return "Outside";
        }
    return "Outside";
}

console.log("Outside or Inside: ", testLogical(40))

//Else Statement
function testElse(val){
    if (val>5){
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result
}

console.log("test else: ",testElse(5));

//else if

function testElseIf(val){
    if (val>10){
        result = "Bigger than 10";
    } else if (val < 5){
        result = "5 or Smaller";
    } else {
        result = "between  5 and 10"
    }
    return result
}

console.log("Else If: ", testElseIf(5));

//Switch Statement

function caseInSwitch(val){
    var answer="";
    switch(val){
        case 1:
            answer = 'alpha';
        break;
        case 2:
            answer = 'beta';
        break;
        case 3:
            answer = 'gamma';
        break;
        case 4:
            answer = 'delta';
        break;
    }
    return answer
}

console.log('Switch: ', caseInSwitch(3))

function SwitchofStuff(val){
    var answer="";
    switch(val){
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer
}

console.log('Switch: ', SwitchofStuff(5))

//count Cards

var count = 0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = "Hold";
    if (count > 10){
        holdbet = "Bet";
    }
    

    return count + " " + holdbet;
}