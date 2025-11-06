const stringCalculator = require('./stringCalculator');

test('returns 0 for an empty string', () => {
  expect(stringCalculator('')).toBe(0);
});

test('returns the number itself for a single number', () => {
  expect(stringCalculator('5')).toBe(5);
});

test('returns sum of two numbers separated by comma', () => {
  expect(stringCalculator('1,2')).toBe(3);
});
