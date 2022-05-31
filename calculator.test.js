const calculator = require('./calculator');

test("add two numbers together", () => {
    expect(calculator.add(1, 2)).toEqual(3);
});

test("subtract one number from another", () => {
    expect(calculator.subtract(3, 2)).toEqual(1);
});

test("divide one number from another", () => {
    expect(calculator.divide(10, 5)).toEqual(2);
});

test("multiply two numbers", () => {
    expect(calculator.multiply(4, 2)).toEqual(8);
});