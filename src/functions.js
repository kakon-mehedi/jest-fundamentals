const numbers = [1, 2, 3, 4, 5, 6];

function gtNumber(numbers, target) {
	return numbers.filter((n) => n > target);
}

module.exports = {
	gtNumber,
	numbers,
};
