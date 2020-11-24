const assertEqual = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  };

  //write function called eqArrays which recieves two arrays of same size, loop thru array, use same loop to compare

  const eqArrays = function(arrayOne, arrayTwo) {
    let result = true;
     for (let i = 0; i < arrayOne.length ; i++) {
       if (arrayOne[i] !== arrayTwo[i]){
        result = false;
       }
      }
      return result;
    }

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);