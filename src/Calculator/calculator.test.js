const calculator = require("./calculator");

// CALCULATOR OBJECT TESTS
test("Add 5 + 10 = 15", () => {
	expect(calculator.add(5, 10)).toBe(15);
});

test("Subtract 5 - 10 = -5", () => {
	expect(calculator.subtract(5, 10)).toBe(-5);
});

test("Multiply 5 * 10 = 50", () => {
	expect(calculator.multiply(5, 10)).toBe(50);
});

test("Divide 5 / 10 = 0.5", () => {
	expect(calculator.divide(5, 10)).toBe(0.5);
});
