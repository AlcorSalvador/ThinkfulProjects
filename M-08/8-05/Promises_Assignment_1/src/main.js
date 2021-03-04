const { welcome, goodbye, tell } = require("../utils/fortune-teller");

/*
function getFortune(question) {
    return tell(question)
      .then((result) => {
        console.log(`Your question was: ${question}`);
        console.log(`Your fortune is: ${result}`);
        return Promise.resolve();
      })
      .catch((err) => {
        console.log(`There was an error: ${err}`);
        return Promise.reject('yes');
      });
  }

function fullSession(question) {
  welcome().then(console.log);
  getFortune(question)
    .then(() => {
      goodbye().then(console.log);
    })
    .catch(() => {
    });
}
*/

function getFortune(question) {
  tell(question)
    .then((result) => {
      console.log(`Your question was: ${question}`);
      console.log(`Your fortune is: ${result}`);
    })
    .catch((err) => {
      console.log(`There was an error: ${err}`);
    });
}

function fullSession(question) {
  welcome().then(console.log);

  tell(question)
    .then((result) => {
      console.log(`Your question was: ${question}`);
      console.log(`Your fortune is: ${result}`);
      goodbye().then(console.log);
    })
    .catch((err) => {
      console.log(`There was an error: ${err}`);
    });
}

module.exports = { getFortune, fullSession };
