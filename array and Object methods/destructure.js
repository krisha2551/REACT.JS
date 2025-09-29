// array destruction

const fruits = ["apple", "banana", "mango", "popeye", "strawberry"];

const fruits1 = fruits[0];

console.log(fruits1);

// const [first, second] = fruits;

const [apple, banana] = fruits;

console.log(apple);

console.log(banana);

// object destructing

const person = {
  name: "alice",
  age: 22,
  address: "bvn",
};

console.log(person.name);

// now using destructing way

const { name, age, address } = person;

console.log(name, age, address);
