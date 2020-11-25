const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array){
  let newArray = array.slice(1);
  return newArray;
};

let array = [1,2,3,4,5];

const result = tail(array)

assertEqual(result[0], array[1]);


/*
//Hard-coded version:  
assertEqual(result[0],2);
*/