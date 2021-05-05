function pattern(n) {
  let output = '';

  for (let i = 1; i <= n; i += 1) {
    if (i === 1) {
      output += '1';
    } else {
      output += `\n1${'*'.repeat(i - 1)}${i}`;
    }
  }

  return output;
}

module.exports = pattern;
