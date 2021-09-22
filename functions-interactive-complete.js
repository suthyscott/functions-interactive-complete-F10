let jonSnowHealth = 100
// console.log(jonSnowHealth)

// jonSnowHealth = String(jonSnowHealth)
// jonSnowHealth = Boolean(jonSnowHealth) // ==> true

// console.log(jonSnowHealth)

let theWinnerIs = 'Jamie is the winner'

// console.log(theWinnerIs)

let newWinner = theWinnerIs.replace('Jamie', 'Jon')

// console.log(newWinner)

// if(newWinner.includes('Jon')){
//     console.log('Replaced successfully')
// }

// lowerCamelCase
// UpperCamelCase
// snake_case
// kebob-case

// Convert newWinner to lower case
// convert into kebob case

let newWinnerLower = newWinner.toLowerCase()
let newWinnerSplit = newWinnerLower.split(' ')
let newWinnerKebob = newWinnerSplit.join('-')
// console.log(newWinnerKebob)


// --------Functions-----------

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('Jon is alive!')
    } else {
        console.log("RIP Jon Snow")
    }
}

// isJonAlive()

function surpriseAttack(attack){
    // console.log(attack)
    jonSnowHealth -= attack
    isJonAlive()
}

// surpriseAttack(20)

// surpriseAttack(12)

// surpriseAttack(6)

function greeting(person1, person2){
    console.log(`${person1} and ${person2} say hello to each other.`)
}

// greeting('Jon Snow', 'Ned Stark')

function rollDice() {
    let possibleRoles = [1,2,3,4,5,6]
    let randomNumber = Math.floor(Math.random() * possibleRoles.length)
    return possibleRoles[randomNumber]
}

// global scope
let firstRoll = rollDice()
let secondRoll = rollDice()

function diceMultiplier(){
    // local scope
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    console.log(firstRoll, secondRoll)

    // using local variables
    return firstRoll * secondRoll
}

let multipliedNumber = diceMultiplier()

console.log(multipliedNumber)