function findMinMaxSum(numbers) {
  const numArray = numbers.split(" ").map(Number);

  const sortedArray = numArray.slice().sort((a, b) => a - b);

  const minSum = sortedArray.slice(0, 4).reduce((sum, num) => sum + num, 0);

  const maxSum = sortedArray.slice(1).reduce((sum, num) => sum + num, 0);

  return `${minSum} ${maxSum}`;
}

// Test
const input = "1 2 3 4 5";
console.log(findMinMaxSum(input));
