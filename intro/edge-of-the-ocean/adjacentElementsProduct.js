/*
Given an array of integers,
find the pair of adjacent elements that has the largest product and return that product.

Example.

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
  var product = 0;
  for (var i = 0; i < inputArray.length - 1; i++) {
    var newProduct = inputArray[i] * inputArray[i + 1];
    if (i != 0) {
      if (product < newProduct) {
        product = newProduct;
      }
    } else {
      product = newProduct;
    }
  }
  return product;
}
