const utitlty = require('./utility');

describe('When testing CalculateSum function ', () => {
	test('It should add 1 + 2 to equal 3', () => {
		expect(utitlty.calculateSum(1, 2)).toBe(3);
	});
})

describe('When testing Subtract function', () => {
	test('Should Return 5 for value 10 - 5', () => {
		const result = utitlty.subtract(10, 5);
		expect(result).toBe(5);
	});

	test('Should Return invalid for the input a = kakon, b = 10', () => {
		const result = utitlty.subtract('Kakon', 10);
		expect(result).toBe('invalid');
	});
});
