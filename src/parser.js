/* eslint-disable object-shorthand */
/* eslint-disable quotes */

export function parse(name, input) {
  const myArray = input.split("\n");
  const numbers = [];
  let total = 0;

  let i = 0;

  while (i < myArray.length) {
    myArray[i] = myArray[i].replace(".", "");
    myArray[i] = myArray[i].replace(".", "");
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

  const data = {
    name: name,
    hasData: isData,
    data: numbers,
    total: total,
  };

  return data;
}
