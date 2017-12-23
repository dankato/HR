// Strings: Making Anagrams

function main() {
  var a = readLine();
  var b = readLine();
  // starting out, what is a and what is b right now?
  // console.log(a); // cde
  // console.log(b); // abc

  // need to create an empty array to all the letters in the alphabet(27)
  var alphabet = []; // create an empty array
  // for loop to add letters to the array, each one will have a number representing it

  for (var i = 0; i < 27; i++) {
    // fill it with 27 0's, each representaing a number in the alphabet
    alphabet.push(0);
  }

  for (var i = 0; i < a.length; i++) {
    // increment array for all the letter in array 1
    var alphaIndex = a.charCodeAt(i) - "a".charCodeAt(0);
    alphabet[alphaIndex] += 1;
  }

  for (var i = 0; i < b.length; i++) {
    // decrement alphabet array for all the letters in array 2
    var alphaIndex = b.charCodeAt(i) - "a".charCodeAt(0);
    alphabet[alphaIndex] -= 1;
  }

  // the results total
  var tally = 0;
  for (var i = 0; i < alphabet.length; i++) {
    tally += Math.abs(alphabet[i]);
  }

  console.log(tally);
}

