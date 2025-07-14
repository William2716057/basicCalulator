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
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter first number: ', function (input1) {
    rl.question('Enter second number: ', function (input2) {
        var num1 = parseFloat(input1);
        var num2 = parseFloat(input2);
        console.log("Add:", add(num1, num2));
        console.log("Subtract:", subtract(num1, num2));
        console.log("Multiply:", multiply(num1, num2));
        console.log("Divide:", divide(num1, num2));
        rl.close();
    });
});
