"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 === 0 ? "Cannot divide by zero":num1 / num2;

// Step 02: Create a Validation Function for Inputs
function validateInputs(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
        return "Both inputs must be numbers";
};
// Step 03: Create a Calculator Function to Combine the Above Functions
function calculator(num1, num2, operation) {

    const validateError = validateInputs(num1, num2);
    if (validateError){
        return  validateError;
    }

    switch (operation) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            // Handle cases where the operation is not recognized.
            return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'";
    }
}

console.log(add(10,5))
console.log(validateInputs(10,'a'))
console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "divide"));
console.log(calculator(10, 0, "divide"));
console.log(calculator(10, 5, "unknown"));
