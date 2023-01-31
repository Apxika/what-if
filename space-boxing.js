// Julio Cesar Chavez Mark VII is an interplanetary space boxer, 
// who currently holds the championship belts for various weight categories on many different planets within our solar system. 
// However, it is often difficult for him to recall what his "target weight" needs to be on earth in order to make the weight class on other planets. 
// Write a program to help him keep track of this.

// It should ask him what his earth weight is, and to enter a number for the planet he wants to fight on. 
// It should then compute his weight on the destination planet based on the table below:

const prompt = require ('prompt-sync')({sigint: true})

let num1 = Number(prompt("Enter your Earth weight: ")); 
console.log('1. Venus')
console.log('2. Mars')
console.log('3. Jupiter')
console.log('4. Saturn')
console.log('5. Uranus')
console.log('6. Neptune')
let num2 = Number(prompt("Enter the planet number for desired weight: "));

if (num2 === 1) {
    console.log(0.78 * num1)
} else if (num2 === 2) {
    console.log(0.39 * num1)
} else if (num2 === 3) {
    console.log(2.65 * num1)
} else if (num2 === 4) {
    console.log(1.17 * num1)
} else if (num2 === 5) {
    console.log(1.05 * num1)
} else if (num2 === 6) {
    console.log(1.23 * num1)
} else console.log("Try again")
