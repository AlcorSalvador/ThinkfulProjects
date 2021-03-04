const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios
    .get(`${BASE_URL}/constellations`)
    .then((constellation) => {
      const stars = constellation.data;
      const starNameList = [];
      stars.forEach((star) => {
        starNameList.push(star.name);
      });
      console.log(starNameList);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function getConstellationsByQuadrant(quadrant) {
  axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => {
      const result = response.data.filter((constellation) => {
        return constellation.quadrant == quadrant;
      });
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
