console.log('Problem Solving Q: 22');

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(str) {
	const arr = str.split('').sort();
	const arrChar = [];
	const arrLength = [];
	const arrOrder = [];
	for (let i = 0; i < arr.length; i++) {
		const arrOfFrequencyChar = arr.filter((char) => char === arr[i]);
		if (!arrChar.find((item) => item[0] === arrOfFrequencyChar[0])) {
			arrChar.push(arrOfFrequencyChar[0]);
			arrLength.push(arrOfFrequencyChar.length);
		}
	}
	for (let j = 0; j < arrLength.length; j++) {
		const arr2 = [arrChar[j], arrLength[j]];
		arrOrder.push(arr2);
	}
	return arrOrder.sort((item1, item2) => item2[1] - item1[1]);
}

console.log(characterFrequency('mississippi'));
console.log(characterFrequency('miaaiaaippi'));

/* 
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/
