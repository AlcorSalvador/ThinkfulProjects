function sortWords(words) {
  return words.sort((compA, compB) =>
    compA.toLowerCase() > compB.toLowerCase() ? 1 : -1
  );
};

function sortNumbers(numbers) {
  return numbers.sort((compA, compB) =>
  compA > compB ? 1 : -1
);
};

function largestFirst(numbers) {
  return numbers.sort((compA, compB) =>
  compA < compB ? 1 : -1
);
};

function sortFlowersByZone(flowers) {
  return flowers.sort((compA, compB) =>
  compA.zone > compB.zone ? 1 : -1
);
};

function sortByLength(strings) {
  return strings.sort((compA, compB) =>
  compA.length > compB.length ? 1 : -1
);
}

module.exports = {
   sortWords,
   sortNumbers,
   largestFirst,
   sortFlowersByZone,
   sortByLength
}