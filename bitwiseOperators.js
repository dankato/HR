// Bitwise Operators

// We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S = {1, 2, 3, ..., n}. We want to know the maximum bitwise AND value of any two integers, a and b (where a < b), in sequence S that is also less than a given integer, k.

// Complete the function in the editor so that given n and k, it returns the maximum a & b < k.

function getMaxLessThanK(n, k) {
  let largest = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let current = i & j;
      if (current > largest && current < k) {
        largest = current;
      }
    }
  }
  return largest;
}

// ES6 1liner
function getMaxLessThanK(n, k) {
  return (k | (k - 1)) > n ? k - 2 : k - 1;
}

// if K or K-1 is greater than 'n' return k-2; else return k-1.
