// Write a program that prompts the user for a number, then displays the appropriate day of the week according to the table below.
// 1 	Monday
// 2 	Tuesday
// 3 	Wednesday
// 4 	Thursday
// 5 	Friday
// 6 	Saturday
// 7 	Sunday
// anything else 	"error"

const prompt = require('prompt-sync')({sigint: true});

let day = Number(prompt('Enter the number: '))

if(day === 1) {
    console.log("Monday")
} else if (day === 2) {
    console.log("Tuesday")
} else if (day === 3) {
    console.log("Wednesday")
} else if (day === 4) {
    console.log("Thursday")
} else if (day === 5) {
    console.log("Friday")
} else if (day === 6) {
    console.log("Saturday")
} else if (day === 7) {
    console.log("Sunday")
} else console.log("Error")