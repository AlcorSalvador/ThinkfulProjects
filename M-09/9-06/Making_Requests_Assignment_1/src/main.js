const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function create(body) {
  axios
    .post(`${BASE_URL}/constellations`, {
      name: body.name,
      meaning: body.meaning,
      starsWithPlanets: body.starsWithPlanets,
      quadrant: body.quadrant,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function show(id) {
  axios
    .get(`${BASE_URL}/constellations/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function update(id, body) {
  axios
    .put(`${BASE_URL}/constellations/${id}`, body)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function destroy(id) {
  console.log(id);
  axios
    .delete(`${BASE_URL}/constellations/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
