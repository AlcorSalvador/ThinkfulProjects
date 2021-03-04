function printNames(names) {
  names.forEach((eName) => console.log(eName));
};

function logTreeType(trees) {
  trees.forEach((objectTree, i, collection) => {
    //console.log(collection[i].type);
    console.log(objectTree.type);
  });
};

function totalPoints(points) {
  let output = 0;
  points.forEach((point) => (output += point));
  return output;
};

function buildSentence(words) {
  let output = "";
  words.forEach((word) => (output += `${word} `));
  return output;
};

function logPercentages(decimals) {
  /*
  let output = "";
  decimals.forEach((num) => {
    output += `${num * 100}%\n`;
    console.log(num);
  });
  console.log(output);
  */
  decimals.forEach((num) => {
    console.log(`${num * 100}%`);
  });
};

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
