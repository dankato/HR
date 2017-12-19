// Regular Expressions III

// Complete the function in the editor below by returning a RegExp object, re, that matches every integer in some string s.
// The length of string s is >= 3.
// It's guaranteed that string s contains at least one integer.

// Hint: flags

function regexVar() {
  /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

  /*
     * Do not remove the return statement
     */
  return new RegExp("\\d+", "g");
}
