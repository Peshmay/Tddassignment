const formatDate = require('./dateFormatter');

test('should return empty string for null input', () => {
  expect(formatDate(null)).toBe('');
});
test('should return empty string for undefined input', () => {
  expect(formatDate(undefined)).toBe('');
});
test('should correctly format a Date object (2025-11-06) to 11/06/2025', () => {
  expect(formatDate(new Date('2025-11-06'))).toBe('11/06/2025');
});
test('should correctly format a different Date object (2022-03-14) to 03/14/2022', () => {
  expect(formatDate(new Date('2022-03-14'))).toBe('03/14/2022');
});
