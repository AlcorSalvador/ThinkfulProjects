import "./styles.css";

/**
  Write the addheadings() function here
*/
function addHeadings() {
  const articles = document.querySelectorAll(".articles article");

  for (let article of articles.values()) {
    article.innerHTML = `<h2>${article.innerText}</h2>`;
  }
}

/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles() {
  const articles = document.querySelectorAll(".articles article");

  for (let article of articles.values()) {
    if (article.innerText.includes("Article")) article.classList = "article";
    if (article.innerText.includes("Tutorial")) article.classList = "tutorial";
  }
}

/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials() {
  const tutorials = document.querySelectorAll(".articles .tutorial");
  
  const newDiv = document.createElement("div");
  newDiv.classList.add("container");

  const newHeader = document.createElement("header");
  newHeader.innerHTML = `<h2>Tutorials</h2>`;

  const newSection = document.createElement("section");
  newSection.classList = "tutorials";

  for (let element of tutorials){
    newSection.appendChild(element);
  }

  newDiv.appendChild(newHeader);
  newDiv.appendChild(newSection);

  const refBody = document.querySelector("body");
  refBody.appendChild(newDiv);
}

/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
