const pattern = require('../../6kyu/Interesting_Pyramid');

describe('Interesting Pyramid Suite', () => {
  test('should remind when input less than zero', () => {
    expect(pattern(-2)).toBe('check input');
  });
  test('should remind when input is float', () => {
    expect(pattern(1.23)).toBe('check input');
  });
  test('should pass when input is three', () => {
    expect(pattern(3)).toBe('    *\n  1 2 3\n # # # #');
  });
  test('should pass when input is seven', () => {
    expect(pattern(7)).toBe('        *\n      1 2 3\n     # # # #\n    * * * * *\n   1 2 3 4 5 6\n  # # # # # # #\n * * * * * * * *');
  });
  test('should pass when input is even and larger than ten', () => {
    expect(pattern(12)).toBe('             *\n           1 2 3\n          # # # #\n         * * * * *\n        1 2 3 4 5 6\n       # # # # # # #\n      * * * * * * * *\n     1 2 3 4 5 6 7 8 9\n    # # # # # # # # # #\n   * * * * * * * * * * *\n  1 2 3 4 5 6 7 8 9 0 1 2\n # # # # # # # # # # # # #');
  });
});
