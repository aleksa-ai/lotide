const words = ["hello", "world", "lighthouse"];

let without = function(source, itemsToRemove) {
  let newArray = [];
  newArray = source.filter((word, index, arr)=>{
        arr.pop()
        return word !== itemsToRemove
      });
  return newArray;
}


//console.log(without(words, ["lighthouse"]));

module.exports = without;