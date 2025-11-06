const totalCart = require('./cartTotal');

test('should return 0 for empty array', () => {
  expect(totalCart([])).toBe(0);
});
test('should correctly sum a single item', () => {
  expect(totalCart([{ price: 10, quantity: 1 }])).toBe(10);
});
test('should correctly sum multiple items', () => {
  expect(
    totalCart([
      { price: 5, quantity: 2 },
      { price: 10, quantity: 1 }
    ])
  ).toBe(20);
});
