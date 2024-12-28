# Unexpected Type Coercion in JavaScript Arithmetic

This example demonstrates a common JavaScript pitfall: unexpected type coercion during arithmetic operations. JavaScript's loose typing can lead to unexpected results when mixing numbers and strings in calculations.

## Bug Description:

The `bug.js` file shows several examples where adding a number and a string results in string concatenation instead of numerical addition.  Subtraction, multiplication, and division show different, potentially surprising, results depending on the specific operators.

## Solution:

The `bugSolution.js` file provides a solution using explicit type conversion (using `parseInt` or `parseFloat`) to ensure all operands are numbers before performing arithmetic.

This demonstrates the importance of careful type handling to avoid unexpected results in JavaScript.