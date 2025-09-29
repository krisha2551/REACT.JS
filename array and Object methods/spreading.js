
// The spread operator allows an iterable (like an array or object) to be expanded into individual elements.

// spread

const fruits = ["orange", "apple", "banana", "mango"];

const vegetables = ["potato", "carrot", "tomato"];

const totalItem = [...fruits, ...vegetables];

console.log(totalItem);

// object

const person1 = {
  name: "alice",
  age: 20,
  city: "bvn",
};

const person2 = {
  name1: "john",
  age1: 20,
  city1: "ahm",
};

// merging

// Combining two or more arrays or objects into one.

const peopleData = { ...person1, ...person2 };

console.log(peopleData);

//

const item1 = {
  number1: "one",
  number2: "two",
};

const item2 = {
  ...item1,
  number3: "three",
};

console.log(item2);
