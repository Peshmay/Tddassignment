// Checks password against two rules
function isValidPassword(password) {
  if (typeof password !== 'string') return false;
  if (password.length < 8) return false;
  if (!/\d/.test(password)) return false; // contains at least one digit
  return true;
}

module.exports = isValidPassword;
