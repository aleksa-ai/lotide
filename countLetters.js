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

//countLetters("lighthouse in the house");

module.exports = countLetters;
