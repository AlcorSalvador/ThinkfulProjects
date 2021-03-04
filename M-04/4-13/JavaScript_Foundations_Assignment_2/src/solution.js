/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Court Sneaker",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const output = (priceInCents / 100).toFixed(2);
  return `$${output}`;
};

function chooseItemByNameAndSize(products, name, size) {
  let output = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name && products[i].availableSizes.includes(size)) output = products[i];
  };
  return output;
};

function addProductToCart({ name, priceInCents }, cart = {}) {
  let output = cart[name];
  output ? output.quantity++ : cart[name] = { priceInCents, quantity: 1 };
  return cart;
};

function calculateTotal(cart) {
  let output = 0;
  for (let name in cart) {
    const product = cart[name];
    output += product.quantity * product.priceInCents;
  };
  return output;
};

function printReceipt(cart) {
  const finalPrice = calculateTotal(cart);
  if (finalPrice == 0) return null;
  let output = "";
  for (let name in cart) {
    const { quantity, priceInCents } = cart[name];
    const itemPrice = printablePrice( quantity * priceInCents );
    output += `${quantity}x${name} - ${itemPrice}\n`;
    //output += `${cart[name].quantity}x${name} - ${printablePrice( cart[name].quantity * cart[name].priceInCents )}\n`;
  };
  return output += `Total: ${printablePrice(finalPrice)}`;
};

module.exports = { 
  chooseItemByNameAndSize, 
  addProductToCart, 
  calculateTotal, 
  printReceipt, 
};