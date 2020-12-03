const eqArrays   = require('./eqArrays');

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

module.exports = eqObjects;