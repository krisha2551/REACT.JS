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
