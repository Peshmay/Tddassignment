const isValidPassword = require('./passwordValidator');

test('should return false if password is less than 8 characters', () => {
  expect(isValidPassword('short')).toBe(false);
});
test('should return false if password does not contain a number', () => {
  expect(isValidPassword('longenough')).toBe(false);
});
test('should return true if password is >=8 chars and contains at least one number', () => {
  expect(isValidPassword('password1')).toBe(true);
});
