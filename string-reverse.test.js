const reverseString = require('./string-reverse.js');

it('hello reversed equals olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

it('mama reversed equals amam', () => {
  expect(reverseString('mama')).toBe('amam');
});

it('asdfghjkl reversed equals lkjhgfdsa', () => {
  expect(reverseString('asdfghjkl')).toBe('lkjhgfdsa');
});
