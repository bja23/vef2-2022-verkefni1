/*var stats = require("stats-lite")*/
import awesomeStatistics from 'awesome-statistics';
import mnjs from 'mnjs';

export function parse(name, input){
    
    const myArray = input.split('\n');
    let numbers = [];
    let total = 0;

    var i = 0;

    while(i < myArray.length){
        myArray[i] = myArray[i].replace('.','');
        myArray[i] = myArray[i].replace(',','.');
        if(isNaN(myArray[i])){
            i++;
            continue;
        }
        if(myArray[i]  === ''){
            i++;
            continue;
        }
        total = numbers.push(parseFloat(myArray[i]));

        i++;
    }

   let isData = true;
   if(total == 0){
       isData = false;
   }

   const newData = {
       name: name,
       hasData: isData
   };


   if(total){
    let variance = awesomeStatistics.variance(numbers);
    let max = mnjs.max(numbers);
    let median = awesomeStatistics.median(numbers);
    let min = mnjs.min(numbers);
    let sd = awesomeStatistics.standardDeviation(numbers);
    let sum = awesomeStatistics.sum(numbers);
    let range = awesomeStatistics.range(numbers);
    let mean = sum/total;

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
        data: numbers
    };

    return data;
   }

    return newData;
}