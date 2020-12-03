const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value) {
  const resultKey = [];
  for (const key in object) {
    if (object[key] === value) {
      resultKey.push(key);
    }
  }
  //console.log(results)
  return resultKey[0];
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

// findKeyByValue(bestTVShowsByGenre, "The Wire");
// findKeyByValue(bestTVShowsByGenre, "That '70s Show");

module.exports = findKeyByValue;