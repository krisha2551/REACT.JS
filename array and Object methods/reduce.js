const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const totalNumber = number.reduce((acc, curr) => acc + curr);

console.log(totalNumber);

const products = [
  {
    name: "soap",
    price: 50,
    qty: 10,
  },
  {
    name: "veg",
    price: 500,
    qty: 5,
  },
  {
    name: "fruits",
    price: 300,
    qty: 2,
  },
];

const totalBill = products.reduce(
  (acc, curr) => acc + curr.price * curr.qty,
  0
);

console.log(totalBill);
