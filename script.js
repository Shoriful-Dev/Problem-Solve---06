// Write a Function to calculate the sum of all elements in an array.for Example, given the array [1,2,3], the Function should return 14 becase 1*1 + 2*2 + 3*3 = 1+4+9= 14,

const sumOfSquares = (arr) => {
  return arr.reduce((accum,charElem) => accum = accum + (charElem*charElem),0)
}

// Example Usage:
console.log(sumOfSquares([1,2,3])); // Output: 14
console.log(sumOfSquares([1,2,3,4,5,6])); // Output: 91
console.log(sumOfSquares([1,2,3,4,5,6,7,8,9])); // Output: 285

