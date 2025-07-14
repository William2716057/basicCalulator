"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0)
        return "Can't divide by 0";
    return a / b;
}
function modulo(a, b) {
    return a % b;
}
// Exponent
function exponent(a, b) {
    return Math.pow(a, b);
}
// Square root
function sqrt(x) {
    return Math.sqrt(x);
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter first number: ', function (input1) {
    rl.question('Enter second number: ', function (input2) {
        var num1 = parseFloat(input1);
        var num2 = parseFloat(input2);
        if (isNaN(num1) || isNaN(num2)) {
            console.log("❌ Please enter valid numbers.");
        }
        else {
            console.log("Add:", add(num1, num2));
            console.log("Subtract:", subtract(num1, num2));
            console.log("Multiply:", multiply(num1, num2));
            console.log("Divide:", divide(num1, num2));
            console.log("Modulo:", modulo(num1, num2));
            console.log("Exponent (num1 ^ num2):", exponent(num1, num2));
            console.log("Square root of first number:", sqrt(num1));
            console.log("Square root of second number:", sqrt(num2));
        }
        rl.close();
    });
});
