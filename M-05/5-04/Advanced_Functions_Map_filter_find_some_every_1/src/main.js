/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function findParkByName(parks, name) {
  return parks.find((ePark) => ePark.name === name);
};

function allParksAboveCertainSize(parks, minSize) {
  return parks.every((ePark) => ePark.areaInSquareKm > minSize);
};

function getBigParkNames(parks, minSize) {
  let temp = parks.filter((ePark) => ePark.areaInSquareKm > minSize);
  let output = temp.map((temp) => temp.name);
  return output;
};

function doesStateHaveOneBigPark(parks, minSize, state) {
  let temp = parks.filter((ePark) => ePark.location.state == state);
  return temp.some((ePark) => ePark.areaInSquareKm > minSize);
};

/*
function getBigParkNames(parks, minSize) { 
  const listParks = parks.filter((parks) => parks.areaInSquareKm >= minSize).map((parks) => parks.name); 
  return listParks; 
};
*/

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
