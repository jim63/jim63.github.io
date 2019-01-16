function max(...nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = (nums[i] > max) ? nums[i] : max;
  }
  return max;
}

console.log(max(1, 2, 4, 5));
console.log(max(5, 2, 7, 1, 6));