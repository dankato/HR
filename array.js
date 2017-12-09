// Arrays

// Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums.

function getSecondLargest(nums) {
  // Complete the function
  nums.sort(function(a, b) {
    console.log("b", b); // 3, 6, 6, 5, 7
    console.log("a", a); // 7, 3, 6, 6, 7
  });
  console.log("nums[i]", nums[i]); // 7
  return nums[i];
}

// Solution
function getSecondLargest(nums) {
  // Complete the function
  nums.sort(function(a, b) {
    return b - a;
  });
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != nums[0]) {
      return nums[i];
    }
  }
}

getSecondLargest([7, 3, 6, 6, 5]);

function getSecondLargest(nums) {
  // Complete the function
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    }
    if (nums[i] > second && nums[i] < first) {
      second = nums[i];
    }
  }
  return second;
}
