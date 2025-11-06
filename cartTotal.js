function totalCart(items) {
  if (!Array.isArray(items) || items.length === 0) return 0;
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

module.exports = totalCart;
