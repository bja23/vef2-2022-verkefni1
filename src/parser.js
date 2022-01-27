/*var stats = require("stats-lite")*/
import awesomeStatistics from 'awesome-statistics';
import { Arr } from 'array-helpers';

function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

export function parse(name, input){
    
    const myArray = input.split('\n');
    let numbers = [];
    let total = 0;

    var i = 0;

    while(i < myArray.length){
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


    
    let variance = awesomeStatistics.variance(numbers);
    let max = numbers.max;
    let median = awesomeStatistics.median(numbers);
    let min = numbers.min;
    let sd = awesomeStatistics.standardDeviation(numbers);
    let sum = awesomeStatistics.sum(numbers);
    let range = awesomeStatistics.range(numbers);
    let mean = sum/total;
    


   let isData = true;
   if(total == 0){
       isData = false;
   }
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