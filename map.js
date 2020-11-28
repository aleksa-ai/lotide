// Our map function will take in two arguments:
// 1) An array to map
// 2) A callback function
// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(arrayOne, arrayTwo) {
  let result = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
