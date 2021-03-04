const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation) {
  const url = `${BASE_URL}/constellations/${constellation.id}`;
  return axios.put(url, constellation).catch((err) => {
    return { error: `Updating constellation (id: ${err.id}) failed.` };
  });
}

async function bulkImport(constellations) {
  if (!Array.isArray(constellations)) {
    return Promise.reject({ error: "Inputted argument must be an array." });
  }

  for (constellation in constellations) {
    if (!isValid(constellations[constellation])) {
      return Promise.reject({
        error: "All constellations must include relevant fields.",
      });
    }
  }

  const output = await constellations.map((constellation) => {
    return update(constellation);
  });
  console.log(output);
  return Promise.allSettled(output);
}

module.exports = { bulkImport, update };
