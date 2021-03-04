const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    const result = response.data.filter((constellation) => {
      return constellation.starsWithPlanets < 10;
    });
    result.forEach((star) => {
        console.log(star.name);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

let starId = " ";

axios
  .post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
    starId = response.data.id;
    console.log(starId);
  })
  .finally(() => {
    axios.delete(`${url}/${starId}`);
    //axios.get(`${url}/47qBa-_`);
  });
