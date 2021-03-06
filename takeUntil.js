// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      break;
    }
    results.push(item);
  }
  return results;
};

// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

module.exports = takeUntil;