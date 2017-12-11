// Create a Rectangle Object

// Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:

// length: This value is equal to a.
// width: This value is equal to b.
// perimeter: This value is equal to 2 * (a + b)
// area: This value is equal to a * b

function Rectangle(a, b) {
  let length = a;
  let width = b;
  let perimeter = 2 * (a + b);
  let area = a * b;
  return { length, width, perimeter, area };
}
