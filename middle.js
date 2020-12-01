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

module.exports = middle;