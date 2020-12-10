console.log('Problem Solving Q:24 ');

/* bubbleSort */

/*  
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:
  • If the first element is greater than the second element, it swaps the two.
  • It then compares the second to the third, and the third to the fourth, and so on.
    - In this way, the largest values 'bubble' to the end of the array.
  • Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
*/

function bubbleSort(arrOfNums) {
	let largerNum;
	for (let i = 0; i < arrOfNums.length; i++) {
		for (let j = i + 1; j < arrOfNums.length; j++) {
			if (arrOfNums[i] > arrOfNums[j]) {
				largerNum = arrOfNums[i];
				arrOfNums[i] = arrOfNums[j];
				arrOfNums[j] = largerNum;
			}
		}
	}
	return arrOfNums;
}

console.log(bubbleSort([9, 3, 2, 5, 6, 8, 10, 0, -99, 25, 5, 15]));

/* 
Examples:
bubbleSort() // =>
bubbleSort() // =>
bubbleSort() // =>
*/
