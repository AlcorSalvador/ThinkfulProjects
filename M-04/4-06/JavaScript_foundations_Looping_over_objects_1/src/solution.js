/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let output = 0;
  for (let i in cart) {
    output += cart[i].quantity * cart[i].priceInCents;
  }
  return output;
}

function printCartInventory(cart) {

  let output = "";

  for (let item in cart) {
    const list = cart[item];
    const amount = list.quantity;
    output += `${amount}x${item}\n`;
  };

  return output;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
