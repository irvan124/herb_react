const getCurrentDate = () => {
  let colon = ':';
  let separator = '-';
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let hour = newDate.getHours();
  let minutes = newDate.getMinutes();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date} at ${hour}${colon}${minutes}`;
};

export default getCurrentDate;
