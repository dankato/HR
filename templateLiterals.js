// Template Literals

// Complete the function in the editor so that it does the following:

// Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula:
// s = P +- √P^ - 16 * A / 4
// where A is the rectangle's area and P is its perimeter.
// Creates an array consisting of s1 and s2 and sorts it in ascending order.
// Returns the sorted array.

function sides(literals, ...expressions) {
  let A = expressions[0];
  let P = expressions[1];
  let s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
  let s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
  return [s1, s2].sort();
}
