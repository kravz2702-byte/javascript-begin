let hands = ["rock", "paper", "scissor"]

function getRandomItem(){
    number = Math.floor(Math.random()*(3-0))+0
    return hands[number]
}

let item = getRandomItem()
console.log(item)