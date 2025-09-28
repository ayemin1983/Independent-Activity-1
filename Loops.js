console.log("For loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}


console.log("\nWhile loop:");
let count = 1;
while (count <= 5) {
  console.log("Count is:", count);
  count++;
}


console.log("\nDo...While loop:");
let number = 1;
do {
  console.log("Number is:", number);
  number++;
} while (number <= 5);


console.log("\nFor...of loop:");
const fruits = ["Mango", "Strawberry", "Cherry"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}


console.log("\nFor...in loop:");
const student = { id: 1, name: "Ayemin", grade: "A" };
for (let key in student) {
  console.log(key + ":", student[key]);
}
