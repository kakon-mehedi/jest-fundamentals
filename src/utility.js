function calculateSum(a, b) {
	return a + b;
}

function subtract(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') return 'invalid'
	return a - b;
}

module.exports = {
	calculateSum,
	subtract
}