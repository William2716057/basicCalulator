import * as readline from 'readline';

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number | string {
    if (b === 0) return "Can't divide by 0";
    return a / b;
}

function modulo(a: number, b: number): number {
    return a % b;
}

// Exponent
function exponent(a: number, b: number): number {
    return Math.pow(a, b);
}

// Square root
function sqrt(x: number): number {
    return Math.sqrt(x);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (input1) => {
    rl.question('Enter second number: ', (input2) => {
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("❌ Please enter valid numbers.");
        } else {
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
