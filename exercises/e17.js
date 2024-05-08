/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  let lowest;
  let minElem;

  for (let elem of array) {
    const result = cb(elem);

    if (typeof result === 'string') {
      if (!lowest || result < lowest) {
        lowest = result;
        minElem = elem;
      }
    } else if (typeof result === 'number') {
      if (result < lowest || lowest === undefined) {
        lowest = result;
        minElem = elem;
      }
    }
  }

  return minElem;
}


export function maxBy(array, cb) {
  let highest;
  let maxElem;

  for (let elem of array) {
    const result = cb(elem);

    if (typeof result === 'string') {
      if (!highest || result > highest) {
        highest = result;
        maxElem = elem;
      }
    } else if (typeof result === 'number') {
      if (result > highest || highest === undefined) {
        highest = result;
        maxElem = elem;
      }
    }
  }

  return maxElem;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function