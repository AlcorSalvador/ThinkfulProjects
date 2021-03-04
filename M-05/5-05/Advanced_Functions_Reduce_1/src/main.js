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

function squareKmTotal(parks) {
  return Object.values(parks).reduce(
    (output, { areaInSquareKm }) => output + areaInSquareKm,
    0
  );
}

function parkNameAndState(parks) {
  return parks.reduce((value, park) => {
    value[park.name] = park.location.state;
    console.log(value);
    return value;
  }, {});
}

function parkByState(parks) {
  return parks.reduce((value, park) => {
    /*
    let arrayTest = [];
    arrayTest.push(park);
    let name = park.location.state;
    console.log(name);
    const parkArray = [park];
    console.log(parkArray);
    value[park.location.state] = arrayTest;
    console.log(value);
    */
   
    /*
    const key = park.location.state;

    if (!value[key]) {
      value[key] = [park];
    } else {
      value[key].push(park);
    }
*/
    const key = park.location.state;
    (!value[key]) ? value[key] = [park] : value[key].push(park);
    return value;
  }, {});
};

module.exports = { squareKmTotal, parkNameAndState, parkByState };
