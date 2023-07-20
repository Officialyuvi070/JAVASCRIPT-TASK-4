// Types of Function.

// 1. Named Function or Regular Function

function add(a, b) {
    return a + b;
}
  
// Call the named function
const result = add(3, 5); // Output: 8
console.log(result)

// 2. Anonymous Function : 
const multiply = function(a, b) {
    return a * b;
};
  
// Named Function Expression
const divide = function divide(a, b) {
    return a / b;
};
  
const result1 = multiply(2, 4); // Output: 8
console.log(result1)
const result2 = divide(10, 2); // Output: 5
console.log(result2)

// 3. Arrow Function
const square = (x) => x * x;
const greet = (name) => `Hello, ${name}!`;

const result3 = square(5); // Output: 25
console.log(result3)
const greeting = greet('Yuvraj'); // Output: "Hello, Yuvarj!"
console.log(greeting)

// 4. Higher Order Function
function operate(operator, a, b) {
    return operator(a, b);
  }
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  const result4 = operate(add, 10, 5); // Output: 15
  console.log(result4)
  const result5 = operate(subtract, 10, 5); // Output: 5
  console.log(result5)

// 5. Generator Function
function* generatorFunc() {
  console.log("1. code before first yield");
  yield 100;
  console.log("2. code before the second yield");
  yield 200;
  console.log("3. code after the second yield");
  yield 300;
}
const generator = generatorFunc();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// 6. First Class Functions : The functions that can be treated just like a variable.

// i) Assigning a function to a variable:
function printName(name) {
  console.log(name);
}
// Assign the function to a variable
var random = printName;

// Access it
random("Yuvraj");

// ii) Passing a function as an argument to another function:

function passFunction(callback) {
  callback("Yuvraj")
}

function sayHello(name) {
  console.log(`Hello ${name}! Welcome To CloudEQ`)
}

passFunction(sayHello);

// iii) Returning a function from another function:

function outerFunction() {
  return function innerFunction() {
    console.log("Inner function is executed!");
  };
}

const inner = outerFunction();
inner(); // Output: Inner function is executed!