export function dataFormat(data) {
  let timestamp = data;
  const updateDate = new Date(timestamp * 1000).toLocaleDateString();
  return updateDate;
}

export function sortByDate(array) {
  array.sort(
    (d1, d2) => new Date(d2.date).getTime() - new Date(d1.date).getTime()
  );
}

export function dataFormatFromPattern(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const newDate = new Date(date);
  const formamattedDate = new Intl.DateTimeFormat("us-US", options).format(
    newDate
  );
  return formamattedDate;
}
