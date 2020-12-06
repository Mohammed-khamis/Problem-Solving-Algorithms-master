console.log('Problem Solving Q:14 ');

/* ArrayMiddle */

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
	let centerNumber = arr.length / 2;
	if (arr.length % 2 === 0) {
		return (arr[centerNumber - 1] + arr[centerNumber]) / 2;
	} else {
		return arr[Math.floor(centerNumber)];
	}
}

/* 
Examples:
ArrayMiddle([200,5,100]) // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
ArrayMiddle([2,3]) // => 2.5
*/
