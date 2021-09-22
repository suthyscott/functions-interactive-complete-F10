let jonSnowHealth = 100 

jonSnowHealth = String(jonSnowHealth)
// jonSnowHealth = jonSnowHealth.toString()
// jonSnowHealth = Boolean(jonSnowHealth)
// jonSnowHealth = Number(jonSnowHealth)
jonSnowHealth = +jonSnowHealth

let theWinnerIs = "Jamie is the winner."

let newWinner = theWinnerIs.replace('Jamie', "Jon")

// if(newWinner.includes('Jon')){
//     console.log('replaced successfully')
// }

// lowerCamelCase
// UpperCamelCase
// snake_case
// kebob-case

// console.log(newWinner.toLowerCase().split(' ').join('-'))

 let newStringArray = newWinner.toLowerCase();
newStringArray = newStringArray.split(" ")
finalString = newStringArray.join("-")


// newWinner = newWinner.toLowerCase();
// console.log(newWinner);
// newWinnerArr = newWinner.split(" ");
// console.log(newWinnerArr);
// newWinner = newWinnerArr.join("-");
// console.log(newWinner);

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log("Jon is alive")
    } else {
        console.log("RIP Jon Snow")
    }
}

// isJonAlive()

// function supriseAttack(attackPower){
//     console.log(attackPower)
//     jonSnowHealth -= attackPower;
// }

// supriseAttack(20)

// function surpriseAttack(attackPower) {
//     console.log(jonSnowHealth -= attackPower)
// }

// function surpriseAttack(enemyAttackPower) {
//     return jonSnowHealth - enemyAttackPower;
// }

// function MonsterAttack(AttackPower){
//     jonSnowHealth = jonSnowHealth - AttackPower;
//     console.log(jonSnowHealth);
// }

// MonsterAttack(20)

function surpriseAttack(attack){
    jonSnowHealth -= attack
    isJonAlive()
}

// surpriseAttack(20)
// surpriseAttack(12)
// surpriseAttack(6)

let boy = "Aang"
let guru = "Guru Paatik"

function greeting(person1, person2) {
    console.log(`${person1} and ${person2} say hello to each other`)
}

// greeting("Ned Stark", "Jon Snow")

// function greeting(person1,person2){
//     console.log(person1 + ' says hi to ' + person2)
// }
// greeting('Sriram', 'Brian')

function rollDice() {
    let possibleRoles = [1,2,3,4,5,6]
    let randomNumber = Math.floor(Math.random() * possibleRoles.length)
    return possibleRoles[randomNumber]
  }

let firstRoll = rollDice()
let secondRoll = rollDice()


function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    
    return firstRoll * secondRoll
}

// console.log(diceMultiplier())

// Function declaration
function sum(num1, num2){
    console.log(num1 + num2)
}

// Function expression
const sum = function(num1, num2){
    console.log(num1 + num2)
}

// Arrow expression
const sum = (num1, num2) => {
    console.log(num1 + num2)
}