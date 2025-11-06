// Function to remove duplicates from an array
function uniqueArray(arr) {
  return [...new Set(arr)];
}

module.exports = uniqueArray;
