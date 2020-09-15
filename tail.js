const assertEqual = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
  };

  const tail = function(array) {
    let newArray = array.slice(1);
    return newArray;
  };
  
  const result = tail([1,2,3])

  console.log(result)

  assertEqual(result[0],2)