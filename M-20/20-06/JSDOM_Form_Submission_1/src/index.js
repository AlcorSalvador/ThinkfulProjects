import "./index.css";

const main = () => {
    const form = document.querySelector(".search");
    form.addEventListener("submit", submitHandler);
  };

const submitHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const searchText = formData.get("searchTerm").toLowerCase();
  const prevError = searchForm.querySelector(".error");
  if (prevError) searchForm.removeChild(prevError);
  errorHandler(validateData(searchText), searchText);
};

const validateData = (value) => {
  if (!value.trim()) {
    const error = document.createElement("div");
    error.id = "searchError";
    error.classList = "error";
    error.innerText = `Please enter a search term`;
    return error;
  }
  return false;
};

function errorHandler(errors, searchText) {
    const searchForm = document.querySelector("#searchForm");
    if (!errors) {
      const headings = document.querySelectorAll("h2");
      for (let element of headings) {
        const parentNode = element.closest("article");
        parentNode.classList.remove("hidden");
        if (!element.innerText.toLowerCase().includes(searchText)) {
          parentNode.classList.add("hidden");
        }
      }
    } else {
      errors.style.display = "block";
      searchForm.appendChild(errors);
    }
  }

window.addEventListener("DOMContentLoaded", main());