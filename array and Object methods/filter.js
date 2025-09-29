// Creates a new array containing elements that pass a given test.


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const evenNumber = number.filter((num) => num % 2 == 0);

console.log(evenNumber);

//another example

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
  {
    name: "jimmy",
    age: 17,
    city: "bvn",
  },
];

const eligiblePerson = personData.filter((p) => p.age > 18);

console.log(eligiblePerson);
