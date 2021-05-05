/**
 * Simple remove duplicates
 * https://www.codewars.com/kata/5ba38ba180824a86850000f7
 */

function solve(arr) {
  const result = [];
  const newArr = [];

  arr
    .filter((item, idx) => arr.indexOf(item) === idx)
    .forEach((item) => newArr.push(arr.lastIndexOf(item)));
  newArr.sort((a, b) => a - b).forEach((item) => result.push(arr[item]));

  return result;
}

module.exports = solve;
