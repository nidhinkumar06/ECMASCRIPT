const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  var squaredValues;
//   squaredIntegers.filter((val) => Number.isInteger(val))
  squaredValues = squaredIntegers.filter(function(val) {
      console.log('val is', val);
      return Number.isInteger(val);
  });
  console.log(squaredIntegers);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);