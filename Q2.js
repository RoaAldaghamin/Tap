function qtwo(nums) {
    const n = nums.length;
    const numsSum = (n * (n + 1)) / 2;
    const Sum = nums.reduce((acc, num) => acc + num, 0);
    return numsSum - Sum;
}

console.log("The missing number:", qtwo([3, 0, 1]));
