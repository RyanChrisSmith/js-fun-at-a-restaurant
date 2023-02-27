function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item)) {
    restaurant.menus[item.type].push(item);
  }
}

function removeMenuItem(restaurant, name, type) {
  var itemIndex = restaurant.menus[type].findIndex(function(item) {
    return item.name === name;
  });

  if (itemIndex !== -1) {
    restaurant.menus[type].splice(itemIndex, 1);
    return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
  } else {
    return `Sorry, we don't sell ${name}, try adding a new recipe!`
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}