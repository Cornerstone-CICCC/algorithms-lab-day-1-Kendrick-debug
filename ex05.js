// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
  //Create a variable with a empty object "{}""
  //Create for loop
  //Create your object inside the loop
  //{category [{name :"apple" , category: "Fruit"}]

  let categories = [];
  for (let i = 0; i < products.length; i++) {
    if (categories[products[i].category]) {
      categories[products[i].category].push(products[i]);
    } else {
      categories[products[i].category] = [products[i]];
    }
  }
  return categories;
}

console.log(
  groupByCategory([
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
  ])
); // { Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] }
