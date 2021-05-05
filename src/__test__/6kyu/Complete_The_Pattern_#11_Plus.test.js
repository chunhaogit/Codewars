const pattern = require('../../6kyu/Complete_The_Pattern_#11_Plus');

describe('pattern suite', () => {
  test('Basic Tests', () => {
    expect(pattern(3)).toBe('  111  \n  222  \n1233321\n1233321\n1233321\n  222  \n  111  ');
  });
  test('More Tests', () => {
    expect(pattern(5)).toBe('    11111    \n    22222    \n    33333    \n    44444    \n1234555554321\n1234555554321\n1234555554321\n1234555554321\n1234555554321\n    44444    \n    33333    \n    22222    \n    11111    ');
  });
});
