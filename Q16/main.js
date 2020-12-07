console.log('Problem Solving Q:16 ');

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(arr) {
	const evenArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (evenArr.find((item) => item === arr[i])) {
			return arr[i];
		}
		if (arr[i] % 2 === 0) {
			evenArr.push(arr[i]);
		}
	}
}


/* 
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8 
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/
