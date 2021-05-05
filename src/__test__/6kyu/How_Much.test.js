const howmuch = require('../../6kyu/How_Much');

describe('How Much suite', () => {
  test('should have all possibilities', () => {
    expect(howmuch(1, 100)).toStrictEqual([['M: 37', 'B: 5', 'C: 4'], ['M: 100', 'B: 14', 'C: 11']]);
  });
  test('should return empty array if fine none', () => {
    expect(howmuch(2950, 2950)).toStrictEqual([]);
  });
});
