function printMedian(nums) {
	// SORTING
	nums.sort((a, b) => a - b); // *** Perfect use case for .sort() ****

	const length = nums.length;

	// Way#1-1 Traditional If condition
	// 	// NOTE: -1 has been added for proper indexing of the Array.
	// 	// ODD
	// 	if (length % 2 === 1) {
	// 		console.log(nums[(0 + length + 1) / 2 - 1]);
	// 	}
	// 	// EVEN
	// 	if (length % 2 === 0) {
	// 		console.log((nums[length / 2 - 1] + nums[length / 2 + 1 - 1]) / 2);
	// 	}

	// Way#1-2 Ternary Operator (More readable)
	length % 2 === 1
		? console.log(nums[(0 + length + 1) / 2 - 1])
		: console.log((nums[length / 2 - 1] + nums[length / 2 + 1 - 1]) / 2);
}

// Test Cases / Results:
printMedian([4, 5, 15, 1, 3]);

// printMedian([4]);                // => 4
// printMedian([4, 5]);             // => 4.5
// printMedian([4, 5, 15]);         // => 5
// printMedian([4, 5, 15, 1]);      // SORT: [1, 4, 5, 15] => 4.5
// printMedian([4, 5, 15, 1, 3]);   // SORT: [1, 3, 4, 5, 15] => 4
