const Calculator = require('./test');

test('adds 5 + 3 to equal 8', () => {
    const calc = new Calculator();
    expect(calc.add(5, 3)).toBe(8);
});

test('subtracts 5 - 3 to equal 2', () => {
    const calc = new Calculator();
    expect(calc.subtract(5, 3)).toBe(2);
});

test('multiplies 5 * 3 to equal 15', () => {
    const calc = new Calculator();
    expect(calc.multiply(5, 3)).toBe(15);
});

test('divides 5 / 3 to be close to 1.6667', () => {
    const calc = new Calculator();
    expect(calc.divide(5, 3)).toBeCloseTo(1.6667);
});

test('divides by zero to throw error', () => {
    const calc = new Calculator();
    expect(() => calc.divide(5, 0)).toThrow("Division by zero is not allowed.");
});