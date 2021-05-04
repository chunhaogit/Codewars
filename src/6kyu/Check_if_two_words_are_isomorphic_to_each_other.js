/*
Check if two words are isomorphic to each other
https://www.codewars.com/kata/check-if-two-words-are-isomorphic-to-each-other
*/

function isomorph(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  let i;
  i = 0;

  while (i < a.length) {
    if ((a[i] === a[i + 1] && b[i] === b[i + 1]) || (a[i] !== a[i + 1] && b[i] !== b[i + 1])) {
      i += 1;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isomorph;
