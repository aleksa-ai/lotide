const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqObjects = function(object1, object2) {
  let keysArrayOne = Object.keys(object1);
  let keysArrayTwo = Object.keys(object2);
  let result = true;
  //console.log(keysArrayOne, keysArrayTwo);
  if (keysArrayOne.length !== keysArrayTwo.length) {
    result = false;
  } else {
    for (const key of keysArrayOne) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        result = eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          result = false;
        }
      }
    }
  }
  return result;
};

const eqArrays = function(arrayOne, arrayTwo) {
  let result = true;
  if (arrayOne.length !== arrayTwo.length) {
    result = false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      result = false;
    }
  }
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);


const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);