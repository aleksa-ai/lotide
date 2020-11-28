//function will return a "slice of the array with elements taken from the beginning." keep going until callback/predicate returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      break;
    }
    results.push(item);
  }
  return results;
};

const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

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

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
console.log('---');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);