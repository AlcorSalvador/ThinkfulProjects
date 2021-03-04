/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getProductsBySize(products, size) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    let comparedProduct = products[i];
    for (let j = 0; j < comparedProduct.availableSizes.length; j++) {
      if (comparedProduct.availableSizes[j] === size) {
        result.push(comparedProduct);
      };
    };
  };
  return result;
};

function moreThanThreeProducts(products) {
  return products.length > 3;
};

function checkForSizeByName(products = null, name, size) {
  let product;
  for (let i = 0; i < products.length; i++) {
    let comparedProduct = products[i];
    if (comparedProduct.name === name) product = comparedProduct;
  };
  return !product ? false : product.availableSizes.includes(size) ? true : false;
  /*
  let temp;
  if (!product) return temp = false;
  else if (product.availableSizes.includes(size)) return temp = true;
  else return temp = false;
  */
};

module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
