const solve = require('../../7kyu/Simple_remove_duplicates');

describe('Simple remove duplicat es suite', () => {
  test('shuold remove the left-m ost duplicates from a list of integers', () => {
    expect(solve([3, 4, 4, 3, 6, 3])).toStrictEqual([4, 6, 3]);
  });
  test('shuold remove the left-most duplicates ii', () => {
    expect(solve([1, 2, 1, 2, 1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
  test('should return same array when there is no duplicates', () => {
    expect(solve([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
  test('shuold remove the left-most duplicates iii', () => {
    expect(solve([1, 1, 4, 5, 1, 2, 1])).toStrictEqual([4, 5, 2, 1]);
  });
  test('shuold remove the left-most duplicates iv', () => {
    expect(solve([1, 2, 1, 2, 1, 1, 3])).toStrictEqual([2, 1, 3]);
  });
});
