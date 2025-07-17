"use strict";

// // Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
// const add = (num1, num2) => num1 + num2;
// const subtract = (num1, num2) => num1 - num2;
// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => num2 === 0 ? "Cannot divide by zero":num1 / num2;

// // Step 02: Create a Validation Function for Inputs
// function validateInputs(num1, num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number')
//         return "Both inputs must be numbers";
//     else{
//         return null;
//     }
// };
// //helper function
// function isNumber(value) {
//     return typeof value === 'number' && !isNaN(value);
// }
// // Step 03: Create a Calculator Function to Combine the Above Functions
// function calculator(num1, num2, operation) {

//     const validateError = validateInputs(num1, num2);
//     if (validateError){
//         return  validateError;
//     }

//     switch (operation) {
//         case "add":
//             return add(num1, num2);
//         case "subtract":
//             return subtract(num1, num2);
//         case "multiply":
//             return multiply(num1, num2);
//         case "divide":
//             return divide(num1, num2);
//         default:
//             // Handle cases where the operation is not recognized.
//             return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'";
//     }
// }

const operations = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => {
        // การจัดการ Error ที่ดีคือการ "throw" Error ออกไป ไม่ใช่คืนค่าเป็น string
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    }
};

function calculator(num1, num2, operation) {
    try {
        // การใช้ typeof อย่างเดียวไม่พอ เพราะ NaN มี typeof เป็น 'number'
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            throw new TypeError("Both inputs must be valid numbers");
        }

        const selectedOperation = operations[operation];
        if (!selectedOperation) {
            throw new Error("Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'");
        }

        return selectedOperation(num1, num2);

    } catch (error) {
        return error.message;
    }
}

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "divide"));
console.log(calculator(10, 0, "divide"));
console.log(calculator(10, 5, "unknown"));
