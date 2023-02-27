function takeOrder(order, deliveryOrders ) {
  if (deliveryOrders.length < 3){
    deliveryOrders.push(order);
  }
}

function refundOrder(thisOrderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === thisOrderNumber) {
      deliveryOrders.splice(i, 1);
      break;
    }
  }
}

function listItems(deliveryOrders) {
  return deliveryOrders.map(order => order.item).join(", ");
}

function searchOrder(deliveryOrders, name) {
  return deliveryOrders.some(function(order) {
    return order.item === name;
  });
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}