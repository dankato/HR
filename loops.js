// Loops

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.

// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in s.

function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i of s) {
    if (vowels.includes(i))
      // process.stdout.write(i + "\n");
      console.log(i);
  }

  for (let i of s) {
    if (!vowels.includes(i))
      // process.stdout.write(i + "\n");
      console.log(i);
  }
}

vowelsAndConsonants("javascriptloops");

// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
