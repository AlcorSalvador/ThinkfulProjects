/*
 The books array contain the list of books in the shopping cart.
 DO NOT EDIT THIS ARRAY
*/
window.books = [
  {
    title: "PROLOG Programming for Artificial Intelligence",
    authors: ["Ivan Bratko"],
    description:
      "Prolog has its roots in logic; however the main aim of this book is to teach Prolog as a practical programming tool.",
    price: 89.29,
    rating: 4.5,
    quantity: 1,
  },
  {
    title: "Elements of the Theory of Computation",
    authors: ["Harry Lewis", "Christos H. Papadimitriou"],
    description:
      "Algorithms, complexity analysis, and algorithmic ideas are introduced informally in Chapter 1, and are pursued throughout the book.",
    price: 182.65,
    rating: 4.7,
    quantity: 2,
  },
  {
    title: "The Silmarillion",
    authors: ["J.R.R. Tolkien"],
    description:
      "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT.",
    price: 14.85,
    rating: 5,
    quantity: 1,
  },
  {
    title: "An Introduction to the Analysis of Algorithms",
    authors: ["Sedgewick Robert", "Flajolet Philippe"],
    description: "Methods and models for mathematically analyzing algorithms.",
    price: 51.19,
    rating: 4.2,
    quantity: 10,
  },
  {
    title: "The Art of Computer Programming, Volumes 1-4",
    authors: ["Donald E. Knuth"],
    description:
      "The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.",
    price: 189.98,
    rating: 5,
    quantity: 2,
  },
];

///////////////////////////////
// WRITE YOUR SOLUTION BELOW //
///////////////////////////////

function renderBook(book) {
  const { title, authors, description, price, rating, quantity } = book;
  // Hack - Fix Later
  // We need a remove button but we arent using it?
  return `
  <div class="book">
    <div class="details">
      <div class="title">
        ${title}
        <span class="rating">(${rating} stars)</span>
      </div>
      <div class="authors">by ${authors}</div>
      <div class="description">
        ${description}
      </div>
      <button class="removeBtn">Remove from cart</button>
    </div>
    <div class="quantity">${quantity} @ $${price}</div>
    <div class="price">$${(quantity * price)}</div>
  </div>`;
}

function calculateTotal() {
  let output = 0;
  for (let book of window.books) {
    output += book.price * book.quantity;
  }
  return output;
}

function render() {
  const booksContainer = document.querySelector("#cartItems");
  booksContainer.innerHTML = "";
  if (window.books.length != 0) {
    for (let book of window.books) {
      booksContainer.innerHTML += renderBook(book);
    }
  } else {
    booksContainer.innerHTML = "Nothing in cart";
  }
  const totalContainer = document.querySelector("#cartTotal .total-price");
  totalContainer.innerText = `\$${calculateTotal()}`;
}

function sortByPrice() {
  const sorted = window.books.sort((book1, book2) => book1.price - book2.price);
  render();
  return sorted;
}

function removeBook() {
  const target = button.closest(book);
  target.remove();
}

function main() {
  render();
  const sortButton = document.querySelector("#sortBtn");
  sortButton.addEventListener("click", sortByPrice);
  //dont know why i cant get remove to work...
  const removeButton = document.querySelectorAll("button.removeBtn");
  for (const button of removeButton) {
    button.addEventListener("click", removeBook);
  }
}

window.addEventListener("DOMContentLoaded", main);

/////////////////////////////////
// DO NOT EDIT BELOW THIS LINE //
/////////////////////////////////
window.render = render;
window.calculateTotal = calculateTotal;
window.sortByPrice = sortByPrice;
