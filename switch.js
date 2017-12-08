// Conditional Statements: Switch
// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the criteria

function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hjklm".includes(s[0]):
      letter = "C";
      break;
    case "npqrstvwxyz".includes(s[0]):
      letter = "D";
      break;
  }
  return letter;
}

function getLetter(s) {
  let letter;
  // Write your code here
  var mySet1 = new Set(["a", "e", "i", "o", "u"]);
  var mySet2 = new Set(["b", "c", "d", "f", "g"]);
  var mySet3 = new Set(["h", "j", "k", "l", "m"]);
  switch (true) {
    case mySet1.has(s[0]):
      letter = "A";
      break;
    case mySet2.has(s[0]):
      letter = "B";
      break;
    case mySet3.has(s[0]):
      letter = "C";
      break;
    default:
      letter = "D";
      break;
  }
  return letter;
}

let getLetter = s =>
  "DABC"[Number.parseInt("aeioubcdfghjklm".indexOf(s[0]) / 5 + 1)];
