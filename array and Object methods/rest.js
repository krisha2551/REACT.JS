// The rest operator collects multiple elements into a single array or object. It is commonly used in function parameters or destructuring.

// Spread: Expands an array or object into individual elements.

// Rest: Collects multiple elements into one array or object.

// rest

// function total(a, b, c, d, e, f, g, h, i) {
//   const result = a + b + c + d + e + f + g + h + i;

//   console.log(result);
// }

function total(...arg) {
  console.log(...arg);
}

total(1, 2, 3, 4, 5, 6, 7, 8, 9);
