function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let secondNum = target - nums[i];
    let newNums = nums;
    delete newNums[i];
    if (newNums.indexOf(secondNum) !== -1) {
      return ([i, newNums.indexOf(secondNum)])
    }
  }
  return false;
}
console.log(twoSum([2, 7, 11, 15], 9));