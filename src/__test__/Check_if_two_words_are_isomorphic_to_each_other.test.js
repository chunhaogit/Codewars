const isomorph = require('../6kyu/Check_if_two_words_are_isomorphic_to_each_other');

describe('isomorphic suite', () => {
  test('Should handle different Uppercase', () => {
    expect(isomorph('ESTATE', 'DUELED')).toBeTruthy();
  });
  test('Should handle same uppercase', () => {
    expect(isomorph('XXX', 'YYY')).toBeTruthy();
  });
  test('Should handle one diff uppercase', () => {
    expect(isomorph('SEE', 'SAW')).toBeFalsy();
  });
  test('Should handle more than one diff uppercase', () => {
    expect(isomorph('XXY', 'XYY')).toBeFalsy();
  });
  test('Should handle words with more than 10 characters', () => {
    expect(isomorph('abcdefghijk', 'abcdefghijba')).toBeFalsy();
  });
});
