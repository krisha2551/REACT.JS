// Creates a new array by applying a function to each element of an existing array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const double = numbers.map((x) => {
  return x * 2;
});

console.log(double);

//

const fruits = ["apple", "banana", "mango", "orange"];

const capital = fruits.map((word) => word.toUpperCase());

console.log(capital);

//

const personData = [
  {
    name: "alice",
    age: 22,
    city: "bvn",
  },
  {
    name: "john",
    age: 20,
    city: "bvn",
  },
];

const personNames = personData.map((x) => x.name);

console.log(personNames);
