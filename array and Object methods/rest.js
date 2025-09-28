// rest

// function total(a, b, c, d, e, f, g, h, i) {
//   const result = a + b + c + d + e + f + g + h + i;

//   console.log(result);
// }

function total(...arg) {
  console.log(...arg);
}

total(1, 2, 3, 4, 5, 6, 7, 8, 9);
