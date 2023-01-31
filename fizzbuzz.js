// This is a classic interview question. 
// Write a program that asks the user for a number. 
// If the number is divisible by 3, the program logs "fizz". 
// If the number is divisible by 5, log "buzz". 
// If the number is divisible by 3 and 5, log "fizzbuzz".

const prompt = require ('prompt-sync')({sigint: true})

let num1 = Number(prompt("Enter a number: ")); 

if (num1 %3 === 0 && num1% 5 === 0) {
    console.log("fizzbuzz");
} else if (num1% 3 === 0) {
    console.log('fizz')
} else if (num1%5 === 0) {
    console.log('fuzz')
} else console.log('Try again')