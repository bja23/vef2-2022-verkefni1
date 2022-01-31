import awesomeStatistics from "awesome-statistics";
import mnjs from "mnjs";

export function calc(name, parsedData) {
  if (parsedData.hasData) {
    const variance = awesomeStatistics.variance(parsedData.data);
    const max = mnjs.max(parsedData.data);
    const median = awesomeStatistics.median(parsedData.data);
    const min = mnjs.min(parsedData.data);
    const sd = awesomeStatistics.standardDeviation(parsedData.data);
    const sum = awesomeStatistics.sum(parsedData.data);
    const range = awesomeStatistics.range(parsedData.data);
    const mean = sum / parsedData.total;

    const data = {
      name: name, // eslint-disable-line object-shorthand
      variance: Math.round(variance),
      max: Math.round(max),
      median: Math.round(median),
      min: min, // eslint-disable-line object-shorthand
      sd: Math.round(sd),
      sum: sum, // eslint-disable-line object-shorthand
      range: Math.round(range),
      mean: Math.round(mean), // eslint-disable-line object-shorthand
      hasData: parsedData.hasData,
      data: parsedData.data,
    };

    return data;
  }

  const dData = {
    name,
    hasData: parsedData.hasData,
  };

  return dData;
}
