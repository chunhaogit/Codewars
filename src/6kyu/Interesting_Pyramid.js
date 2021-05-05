/**
 * Interesting Pyramid
 * https://www.codewars.com/kata/5711efdcdf94ddeeba0001d7
 */

const pattern = (n) => {
  if (n < 0 || n % 1 !== 0) {
    return 'check input';
  }

  let result = '';

  for (let i = 1; i <= n; i += 1) {
    const spacing = ' '.repeat(n - i);
    const end = i + 1;

    if (i === 1) {
      result += `${' '.repeat(n + 1)}*\n`;
    } else if (i % 3 === 1) {
      let firstResult = '';

      for (let j = 1; j <= end; j += 1) {
        firstResult += ' *';
      }

      result += `${spacing}${firstResult}\n`;
    } else if (i % 3 === 2) {
      let secondResult = '';
      for (let j = 1; j <= end; j += 1) {
        const string = String(j);
        secondResult += ` ${string[string.length - 1]}`;
      }

      result += `${spacing}${secondResult}\n`;
    } else if (i % 3 === 0) {
      let thirdResult = '';

      for (let j = 1; j <= end; j += 1) {
        thirdResult += ' #';
      }

      result += `${spacing}${thirdResult}\n`;
    }
  }
  return result.slice(0, -1);
};

module.exports = pattern;
