console.log("=== Spread with Arrays ===");
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combined = [...numbers1, ...numbers2]; 
console.log("Combined:", combined);


console.log("\n=== Spread with Objects ===");
const student = { id: 1, name: "Ayemin" };
const details = { age: 21, grade: "A" };
const studentInfo = { ...student, ...details }; 
console.log("Student Info:", studentInfo);


console.log("\n=== Rest Parameters ===");
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log("Sum of 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5));


console.log("\n=== Array Destructuring ===");
const fruits = ["Orange", "Apple", "Cherry"];
const [first, second, third] = fruits;
console.log("First:", first, "Second:", second, "Third:", third);


const [onlyFirst, , onlyThird] = fruits;
console.log("Skipped Second:", onlyFirst, onlyThird);


console.log("\n=== Object Destructuring ===");
const car = { brand: "Toyota", model: "Corolla", year: 2021 };
const { brand, year } = car;
console.log("Brand:", brand, "Year:", year);


const { model: carModel } = car;
console.log("Car Model:", carModel);


console.log("\n=== Nested Destructuring ===");
const person = {
  name: "Bob",
  address: {
    city: "Seattle",
    zip: 98031
  }
};
const { name, address: { city, zip } } = person;
console.log("Name:", name, "City:", city, "Zip:", zip);