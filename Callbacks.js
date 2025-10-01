
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);


function processNumber(num, callback) {
  let result = num * 2;
  callback(result);
}

processNumber(5, function(output) {
  console.log("Processed Number:", output);
});


processNumber(10, (output) => {
  console.log("Arrow Callback Result:", output);
});


console.log("\n=== Async Example with setTimeout ===");
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data loaded successfully!");
  }, 2000);
}

fetchData((message) => {
  console.log(message);
});


console.log("\n=== Array forEach Callback ===");
const fruits = ["Pineapple", "Mango", "Blurberry`"];
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});