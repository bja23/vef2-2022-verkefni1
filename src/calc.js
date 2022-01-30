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
      name: name,
      variance: variance,
      max: max,
      median: median,
      min: min,
      sd: sd,
      sum: sum,
      range: range,
      mean: mean,
      hasData: parsedData.hasData,
      data: parsedData.data,
    };

    return data;
  }

  const dData = {
    name: name,
    hasData: parsedData.hasData,
  };

  return dData;
}
