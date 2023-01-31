/*Write a program that prompts the user for their age using the prompt-sync Node dependency.

Then, using if statements, else if, and else statements, write code that displays a different message depending on the age given.

less than 16 	"You can't drive."
16 to 17 	    "You can drive but not vote."
18 to 24 	    "You can vote but not rent a car."
25 or older 	"You can do pretty much anything."
*/

const prompt = require('prompt-sync')({sigint: true});

let age = Number(prompt("Enter your age: "));

if(age < 16) {
    console.log('You cannot drive.')
} else if (age === 16) {
    console.log('You can drive but not vote.')
} else if (age === 17) {
    console.log('You can drive but not vote.')
} else if (age <= 24) {
    console.log('You can vote but not rent a car.')
} else console.log("You can do pretty much everything.")
