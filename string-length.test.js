const stringLength = require('./string-length.js');

it('string lenght of abcde is 5', () => {
  expect(stringLength('abcde')).toBe(5);
});

it('string lenght of asdfghjkl is 9', () => {
  expect(stringLength('asdfghjkl')).toBe(9);
});

it('string lenght of 123456789 is 9', () => {
  expect(stringLength('123456789')).toBe(9);
});

it('string too long', () => {
  expect(() => {
    stringLength('123456789ab');
  }).toThrow(
    'Too Long',
  );
});

it('string too short', () => {
  expect(() => {
    stringLength('');
  }).toThrow(
    'Too Short',
  );
});
