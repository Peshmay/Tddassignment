//date formatting function
function formatDate(input) {
  if (input === null || input === undefined) {
    return '';
  }
  const date = new Date(input);
  if (isNaN(date.getTime())) {
    return '';
  }
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

module.exports = formatDate;


