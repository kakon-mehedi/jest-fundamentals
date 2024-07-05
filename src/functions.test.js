const fns = require('./functions');

describe('When testing gtNumber functions', () => {
	test('It should return [5,6] for target 4', () => {
		const result = fns.gtNumber(fns.numbers, 4);
		expect(Array.isArray(result)).toBe(true);
		expect(result.length).toBe(2);
	});
});
