/*
How Much?
https://www.codewars.com/kata/55b4d87a3766d9873a0000d4
*/

const howmuch = (m, n) => {
  const result = [];
  let f = 0;
  let b = 0;

  for (let c = 0; c <= n; c += 1) {
    b = (c * 9 - 1) / 7;
    f = c * 9 + 1;
    if (b % 1 === 0 && f <= n && f >= m) {
      result.push([`M: ${f}`, `B: ${b}`, `C: ${c}`]);
    }
  }

  return result;
};

module.exports = howmuch;
