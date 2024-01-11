const prompt=require("prompt-sync")();
let num = prompt("Enter the number: ");
let result = num.toString().split('').reverse().join('');
console.log(result);