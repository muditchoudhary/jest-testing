function analyzeArray(arr) {
	let result = {
		average: findAvg(arr),
		min: findMin(arr),
		max: findMax(arr),
		length: arr.length,
	};

    return result;
}

function findAvg(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

function findMin(arr) {
	let min = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i];
	}
	return min;
}

function findMax(arr) {
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
	}
	return max;
}

module.exports = analyzeArray;