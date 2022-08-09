const { addition, subtraction, multiply, division } = require('./calculator');

describe('Testing', () => {
  it('addition', () => {
    expect(addition(1, 2)).toBe(3);
  }),
    it('subtraction', () => {
      expect(subtraction(2, 1)).toBe(1);
    }),
    it('multiply', () => {
      expect(multiply(2, 2)).toBe(4);
    }),
    it('division', () => {
      expect(division(4, 2)).toBe(2);
    });
});
