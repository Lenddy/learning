let arr = [1, 5.2, 4, 0, -1];

function sum(numbers) {
	"use strict";

	let total = 0;

	if (numbers.length == 0) {
		return total;
	} else {
		for (let i = 0; i < numbers.length; i++) {
			total += numbers[i];
			console.log(total);
		}
	}
	return total;
}

// console.log(sum(arr));

const sum2 = (numbers) => {
	"use strict";

	let total = 0;

	if (numbers.length == 0) {
		return total;
	} else {
		for (let i = 0; i < numbers.length; i++) {
			total += numbers[i];
			console.log(total);
		}
	}
	return total;
};

const sum3 = (numbers) => {
	"use strict";

	let total = 0;

	if (numbers.length == 0) {
		return total;
	} else {
		for (let i of numbers) {
			total += i;
			console.log(total);
		}
	}
	return total;
};

console.log(sum3([1, 5.2, 4, 0, -1]));

const sum4 = (numbers) => {
	"use strict";

	let total = 0;
	numbers.map((value, idx) => {
		if (numbers.length == 0) {
			return total;
		}
		total += value;
		console.log(` index ${idx}          total   ${total}`);
	});
	return total;
};

console.log(sum4([1, 5.2, 4, 0, -1]));

const sum5 = (number, total = 0) =>
	number.map((value, idx) => {
		total += value;
		console.log(` index ${idx}          total   ${total}`);
		return total[total.length];
	});

console.log(sum5([1, 5.2, 4, 0, -1]));

const sum6 = (numbers) => {
	"use strict";

	let total = 0;
	array.forEach((i) => {
		total += numbers[i];
	});
	return total;
};

console.log(sum6([1, 5.2, 4, 0, -1]));
