const assertEqual = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const countLetters = function(allItems) {
  allItems = allItems.replace(/ /g, '');
  const results = {};
  for (const item of allItems) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
};

let sentenceToCount = "lighthouse in the house";

const expectedObj = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const expectedInString = JSON.stringify(expectedObj);

let actualInString = JSON.stringify(countLetters(sentenceToCount));

assertEqual(actualInString, expectedInString);
