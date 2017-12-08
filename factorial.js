// simple factorial function
// example: 4! = 4 x 3 x 2 x 1 = 24

function factorial(n) {
  return n < 2 ? 1 : factorial(n - 1) * n;
}

factorial(4);
// 24
