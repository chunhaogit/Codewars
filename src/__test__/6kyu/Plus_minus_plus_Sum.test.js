const getSolution = require('../../6kyu/Plus_minus_plus_Sum');

describe('Plus minus plus sum suite', () => {
  test('should result negative', () => {
    expect(getSolution([1, 3, 4, 6, 8], -2)).toBeTruthy();
  });
  test('should result positive', () => {
    expect(getSolution([15, 2, 3], 10)).toBeTruthy();
  });
  test('should result negative, falsey', () => {
    expect(getSolution([1, 5, 3, 2, 5], -2)).toBeFalsy();
  });
});
