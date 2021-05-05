/**
 * Plus - minus - plus - plus - ... - Sum
 * https://www.codewars.com/kata/5bc463f7797b00b661000118/train/javascript
 */

const getSolution = (arr, sum) => {
  const limit = 2 ** (arr.length - 1);

  for (let i = 0; i < limit; i += 1) {
    const opStr = i.toString(2).padStart(arr.length - 1, '0');
    let subtotal;
    subtotal = 0;

    arr.forEach((ele, idx) => {
      if (idx === 0) {
        subtotal += ele;
      } else if (opStr[idx - 1] === '0') {
        subtotal -= ele;
      } else if (opStr[idx - 1] === '1') {
        subtotal += ele;
      }
    });
    if (subtotal === sum) {
      return true;
    }
  }
  return false;
};

module.exports = getSolution;
