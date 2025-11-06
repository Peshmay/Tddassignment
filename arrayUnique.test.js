const uniqueArray = require('./arrayUnique');

test('returns same array if no duplicates', () => {
  expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
});

test('removes duplicates from array', () => {
  expect(uniqueArray([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
});

test('removes multiple sequential duplicates', () => {
  expect(uniqueArray([5, 5, 5])).toEqual([5]);
});
