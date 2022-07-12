const Calculator = require('./calc.js');

describe('add', () => {
  it('add 1 + 2 should be 3', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  it('add 2 + 7 should be 9', () => {
    expect(Calculator.add(2, 7)).toBe(9);
  });

  it('add 8 + 1 should be 9', () => {
    expect(Calculator.add(8, 1)).toBe(9);
  });
});

describe('substract', () => {
  it('substract 10 - 1 should be 9', () => {
    expect(Calculator.substract(10, 1)).toBe(9);
  });

  it('substract 11 - 2 should be 9', () => {
    expect(Calculator.substract(11, 2)).toBe(9);
  });

  it('substract 20 - 11 should be 9', () => {
    expect(Calculator.substract(20, 11)).toBe(9);
  });
});

describe('divide', () => {
  it('divide 1 / 1 should be 1', () => {
    expect(Calculator.divide(1, 1)).toBe(1);
  });

  it('divide 10 / 1 should be 1', () => {
    expect(Calculator.divide(10, 1)).toBe(10);
  });

  it('divide 100 / 10 should be 1', () => {
    expect(Calculator.divide(100, 10)).toBe(10);
  });
});

describe('multiply', () => {
  it('multiply 1 / 1 should be 1', () => {
    expect(Calculator.multiply(1, 1)).toBe(1);
  });

  it('multiply 10 / 1 should be 1', () => {
    expect(Calculator.multiply(10, 1)).toBe(10);
  });

  it('multiply 100 / 10 should be 1', () => {
    expect(Calculator.multiply(100, 10)).toBe(1000);
  });
});