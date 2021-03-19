// Only change code below this line
function sumFibonacci(num) {
  var fibArr = [];
  var fibNum = 1;
  var maxNum = num;
  if (maxNum < 1) {
    return 0;
  } else if (maxNum == 1) {
    return 1;
  } else {
    fibArr.push(fibNum, fibNum);
    while (fibNum <= maxNum) {
      var lastIndex = fibArr.length - 1;
      fibNum += fibArr[lastIndex - 1];
      fibArr.push(fibNum);
    }
  }

  var fibSum = 0;
  for (var i = 0; i < fibArr.length - 1; i++) {
    if (fibArr[i] % 2 !== 0) {
      fibSum += fibArr[i];
    }
  }
  return fibSum;
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); // Change this line
console.log(sumFibonacci(20)); // Change this line
console.log(sumFibonacci(4)); // Change this line
console.log(sumFibonacci(-5)); // Change this line

module.exports = sumFibonacci;
