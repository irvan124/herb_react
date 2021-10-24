const dateFormat = (date) => {
  let d = new Date(date);

  let getYear = d.getUTCFullYear();
  let getMonth = d.getUTCMonth();
  let getDate = d.getUTCDate();

  let dateFormated = `${getDate}-${getMonth}-${getYear}`;
  return dateFormated;
};

export default dateFormat;
