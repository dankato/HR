// Arrays: Left Rotation

function main() {
  var n_temp = readLine().split(" ");
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  var a = readLine().split(" ");
  a = a.map(Number);
  a = a
    .slice(k)
    .concat(a.slice(0, k))
    .join(" ");
  console.log(a);
}

// video notes

// [10, 1, 5, 3, 6, 2]
// a[3] = 3

// arrays have fixed length
// resizable arrays can grow as needed
