class Solution {
  MissingNumber(array, n) {
    // to find the missimg number we will first caluclate the sum of the elements in
    // the array and the total integers of the array and the substract
    // totalNumber - sumOfArray

    //calclutating thge sum of the elments
    const totalSum = (n * (n + 1)) / 2;

    // sum of the arrays
    //to fond the sum of the arrays we will use the resuce method

    const sumOfArray = array.reduce((acc, num) => acc + num, 0);

    return totalSum - sumOfArray;
  }
}


const s = new Solution();
const array = [1, 2, 4, 5];
const n = array.length + 1;
console.log(s.MissingNumber(array, n));
