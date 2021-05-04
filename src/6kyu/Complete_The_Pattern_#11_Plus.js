/*
6 kyu - Complete The Pattern #11 - Plus
https://www.codewars.com/kata/5589ad588ee1db3f5e00005a/train/javascript
*/

function pattern(n) {
  let output = '';
  let midStr = '';
  const spacing = ' '.repeat(n - 1);
  const digit = (i) => (`${i}`).charAt((`${i}`).length - 1);

  for (let i = 1; i <= n; i += 1) {
    if (i === n) {
      midStr += digit(i).repeat(n);
    } else {
      output += `${spacing}${digit(i).repeat(n)}${spacing}\n`;
      midStr += digit(i);
    }
  }

  for (let i = n - 1; i > 0; i -= 1) {
    midStr += digit(i);
  }

  midStr = (`${midStr}\n`).repeat(n);
  output += midStr;

  for (let i = n - 1; i > 0; i -= 1) {
    if (i === 1) {
      output += `${spacing}${digit(i).repeat(n)}${spacing}`;
    } else {
      output += `${spacing}${digit(i).repeat(n)}${spacing}\n`;
    }
  }

  return output;
}

module.exports = pattern;
