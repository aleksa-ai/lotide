const assertEqual = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const eqObjects = function(object1, object2) {
  let keysArrayOne = Object.keys(object1);
  let keysArrayTwo = Object.keys(object2);
  let result = true;
  //console.log(keysArrayOne, keysArrayTwo);
  if (keysArrayOne.length !== keysArrayTwo.length){ 
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
  if (arrayOne.length !== arrayTwo.length){
    result = false
  } 
  for (let i = 0; i < arrayOne.length ; i++) {
     if (arrayOne[i] !== arrayTwo[i]){
      result = false;
     }
    }
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab, ba), true);


const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));
assertEqual(eqObjects(cd, cd2), false);