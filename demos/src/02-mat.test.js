const { sum, multiply, divide } = require('./02-math');
const { test, expect } = require('@jest/globals');

test("add 1 + 3 to equal 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test ("multiply 2 * 3 to equal 6", () => {
  const rta = multiply(2, 3);
  expect(rta).toBe(6);
});

test ("divide 6 / 3 to equal 2", () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
});
