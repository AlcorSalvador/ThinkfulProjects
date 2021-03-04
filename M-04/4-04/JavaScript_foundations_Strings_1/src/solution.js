/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {
  let response = "";

  let list = [];
  for (let i = 0; i < products.length; i++) {
    if (i == null) {
    } else {
      list.push(products[i].name);
    };
  }

  switch (true) {
    case list.length == 0:
      response = `There are no items for sale.`;
      break;
    case list.length == 1:
      response = `There is 1 item for sale: ${list[0]}.`;
      break;
    case list.length == 2:
      response = `There are 2 items for sale: ${list[0]} and ${list[1]}.`;
      break;
    case list.length >= 3:
      response = `There are ${String(list.length)} items for sale: `;
      let responseTemp = list.join(`, `);
      response = response + responseTemp + `.`;
  }

  return response;
}

/*
function listAllItems(products) {
  let list = [];
  for(let i in products){ list.push(products[i].name); };

  //for(let i in products){ list.push(products.name); };

  switch (true) {
    case list.length == 0: response = `There are no items for sale.`; break;
    case list.length == 1: response = `There is 1 item for sale: ${list[0]}.`; break;
    case list.length == 2: response = `There are 2 items for sale: ${list[0]} and ${list[1]}.`; break;
    case list.length >= 3: response = `There are ${String(list.length)} items for sale: ${list.join(`, `)}.`; break;
  }
  return response;
}
*/

module.exports = {
  listAllItems,
};
