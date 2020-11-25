const assertArraysEqual = function(actual, expected){
  if (eqArrays(actual, expected) === true) {
    console.log("✅✅✅ Assertion Passed")
 }else{
   console.log("🛑🛑🛑 Assertion Failed")
 }
}

const eqArrays = function(arrayOne, arrayTwo) {
  let result = true;
   for (let i = 0; i < arrayOne.length ; i++) {
     if (arrayOne[i] !== arrayTwo[i]){
      result = false;
     }
    }
    return result;
  }

const words = ["hello", "world", "lighthouse"];

let without = function(source, itemsToRemove) {
  let newArray = [];
  newArray = source.filter((word, index, arr)=>{
        arr.pop()
        return word !== itemsToRemove
      });
  return newArray;
}


console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]), true);