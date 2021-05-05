const pattern = require('../../7kyu/Number-Star_ladder');

describe('number-star ladder suite', () => {
  test('should accept when input is odd', () => {
    expect(pattern(3)).toBe('1\n1*2\n1**3');
  });
  test('should accept when input is even', () => {
    expect(pattern(8)).toBe('1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8');
  });
  test('should accept when input is greater than ten', () => {
    expect(pattern(20)).toBe('1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n1********9\n1*********10\n1**********11\n1***********12\n1************13\n1*************14\n1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n1*******************20');
  });
});
