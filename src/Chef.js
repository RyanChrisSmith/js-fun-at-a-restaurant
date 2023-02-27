class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(patron, isMorning) {
    if (isMorning) {
      return `Good morning, ${patron}!`;
    } else {
      return `Hello, ${patron}!`
    }
  }

  checkForFood(foodItem) {
    const menus = this.restaurant.menus;
    for (const type in menus) {
      const itemIndex = menus[type].findIndex(item => item.type === type);
      if (itemIndex !== -1) {
        menus[type].splice(itemIndex, 1);
        return `Yes, we're serving ${foodItem.name} today!`
      }
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }
}

module.exports = Chef;