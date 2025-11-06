// Function to sum numbers in a string
function stringCalculator(str) {
  if (str.trim() === '') return 0; // Empty string
  const numbers = str.split(',').map(n => parseInt(n, 10));
  return numbers.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}

module.exports = stringCalculator;
