/*var stats = require("stats-lite")*/

export function parse(name, input){
    
    const myArray = input.split('\n');
    let numbers = [];

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
        let total = numbers.push(parseFloat(myArray[i]));
        i++;
    }

    /*
    Frávik (variance)
    Hæsta gildi (max)
    Meðaltal (mean)
    Miðgildi (median)
    Minnsta gildi (min)
    Staðalfrávik (standard deviation)
    *Summu (sum)
    Svið (range)
    */

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    /*
    console.log(name);
    console.log(myArray.length);
    console.log(sum);
    */
    const data = {name: name, sum: sum, data: numbers};
    return data;
}