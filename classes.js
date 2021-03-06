// Classes

// Create a Polygon class that has the following properties:

// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.
// Locked code in the editor tests the Polygon constructor and the perimeter method.

function Polygon(sides) {
  this.perimeter = function() {
    return sides.reduce((a, b) => {
      return a + b;
    });
  };
}

