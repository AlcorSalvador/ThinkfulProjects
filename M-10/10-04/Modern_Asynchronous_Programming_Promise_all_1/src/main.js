const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = "/constellations"

function bulkDelete(ids) {
  const promises = ids.map((id) => {
    return axios.delete(`${url}/${id}`).then(() => {
      return {id};
    });
  });

  return Promise.all(promises);
}

module.exports = {
  bulkDelete,
};
