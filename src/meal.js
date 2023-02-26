function nameMenuItem(item) {
  return `Delicious ${item}`;
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  };
}

function addIngredients(name, ingredientList) {
  if (!ingredientList.includes(name)) {
    ingredientList.push(name);
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price - (price * .10)
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


