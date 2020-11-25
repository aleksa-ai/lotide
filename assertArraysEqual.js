const eqArrays = function(arrayOne, arrayTwo) {
  let result = true;
   for (let i = 0; i < arrayOne.length ; i++) {
     if (arrayOne[i] !== arrayTwo[i]){
      result = false;
     }
    }
    return result;
  }

  //this assertion function will make use of eqArrays function for array comparison.
  const assertArraysEqual = function(actual, expected){
    if (eqArrays(actual, expected) === true) {
      console.log("✅✅✅ Assertion Passed")
   }else{
     console.log("🛑🛑🛑 Assertion Failed")
   }
  }

  assertArraysEqual([1, 2, 3], [1, 2, 3]);