const eqArrays = function(arrayOne, arrayTwo) {
  // /* Old way: */
  // let result = true;
  //  for (let i = 0; i < arrayOne.length ; i++) {
  //    if (arrayOne[i] !== arrayTwo[i]){
  //     result = false;
  //    }
  //   }
  //   return result;
  /*Simpler way*/
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    return true;
  }
};

//passing two arrays, the actual one and what we expect it to be
//returns a console.log
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};


const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    const middleNumberEven = Math.floor((array.length - 1) / 2);
    //console.log(middleNumberEven)
    return [array[middleNumberEven], array[middleNumberEven + 1]];
  } else {
    //const middleNumberOdd = Math.floor(array.length/2)
    return [array[Math.floor(array.length / 2)]];
  }
};

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([6,7,8,9,10]),[8]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([11,12,13,14,15,16]),[13,14]);
  