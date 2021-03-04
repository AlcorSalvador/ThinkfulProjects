
function getCarColor(car) {
  try {
    return car.color;
  } catch (err) {
    console.log(`Color does not Exist in the Car Object!`)
    return "Color unknown";
  };
}

//do not remove
module.exports = getCarColor;