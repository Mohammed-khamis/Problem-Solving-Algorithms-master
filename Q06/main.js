console.log('Problem Solving Q: 6');

/* Even or Not */

/*  
Write a function that returns true if a number is even, and false otherwise.
*/

function evenOrNot() {
  if (arguments[0] % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

/* Q7: Sum Array Odd */
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
evenOrNot(1) // => false
evenOrNot(2) // => true
evenOrNot(5) // => false
evenOrNot(99) // => false
evenOrNot(0) // => true
*/
