console.log('Problem Solving Q: 9');

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence() {
  if (arguments[0].filter((e) => e === 1).length === 0) {
		return 'There is no one sequenced';
	} else {
		const arr1s = arguments[0].join('').split('0');
		arr1s.sort();
		const seq = arr1s.pop().length;
		return seq;
	}
}

/* 
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/
