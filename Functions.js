function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Ayemin"));


const add = function(a, b) {
  return a + b;
};
console.log("Addition (3 + 5):", add(3, 5));


const multiply = (a, b) => a * b;
console.log("Multiplication (4 * 6):", multiply(4, 6));


function introduce(name = "Gugu", age = 18) {
  console.log(`Name: ${name}, Age: ${age}`);
}
introduce("Bobo", 25);
introduce(); 

function makeMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}
const double = makeMultiplier(2);
console.log("Double 10:", double(10));


function calculate(a, b, operation) {
  return operation(a, b);
}
console.log("Custom Calculation (subtract 9 - 4):", calculate(9, 4, (x, y) => x - y));