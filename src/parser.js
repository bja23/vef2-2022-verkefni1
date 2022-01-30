/* eslint-disable object-shorthand */
/* eslint-disable quotes */
import awesomeStatistics from "awesome-statistics";
import mnjs from "mnjs";

export function parse(name, input) {
  const myArray = input.split("\n");
  const numbers = [];
  let total = 0;

  let i = 0;

  while (i < myArray.length) {
    myArray[i] = myArray[i].replace(".", "");
    myArray[i] = myArray[i].replace(",", ".");
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(myArray[i])) {
      i++; // eslint-disable-line no-plusplus
      continue; // eslint-disable-line no-continue
    }
    if (myArray[i] === "") {
      i++; // eslint-disable-line no-plusplus
      continue; // eslint-disable-line no-continue
    }
    total = numbers.push(parseFloat(myArray[i]));

    i++; // eslint-disable-line no-plusplus
  }

  let isData = true;
  if (total === 0) {
    isData = false;
  }

  const newData = {
    name: name,
    hasData: isData,
  };

  if (total) {
    const variance = awesomeStatistics.variance(numbers);
    const max = mnjs.max(numbers);
    const median = awesomeStatistics.median(numbers);
    const min = mnjs.min(numbers);
    const sd = awesomeStatistics.standardDeviation(numbers);
    const sum = awesomeStatistics.sum(numbers);
    const range = awesomeStatistics.range(numbers);
    const mean = sum / total;

    const data = {
      name: name,
      variance: variance,
      max: max,
      median: median,
      min: min,
      sd: sd,
      sum: sum,
      range: range,
      mean: mean,
      hasData: isData,
      data: numbers,
    };

    return data;
  }

  return newData;
}
