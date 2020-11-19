console.log('Problem Solving Q: 7');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber() {
  const oddNumber = arguments[0].filter((arg) => {
		return arg % 2 !== 0;
	});
	const result = oddNumber.reduce((sum, num) => {
		return sum + num;
	}, 0);

	return result;
}

/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
