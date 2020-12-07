console.log('Problem Solving Q:17 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

function firstNonRepeatedCharacter(str) {
	const arr = str.split('');
	const arr2 = [...arr];

	for (let i = 0; i < arr.length; i++) {
		arr2.splice(0, 1);
		if (!arr2.find((item) => item === arr[i])) {
			return arr[i];
		}
	}
}

console.log(firstNonRepeatedCharacter('ABCDBIRDUP'));
console.log(firstNonRepeatedCharacter('ALABAMA'));
console.log(firstNonRepeatedCharacter('Uber for horses'));

/* 
Examples:
firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
firstNonRepeatedCharacter('ALABAMA') // => 'L'
firstNonRepeatedCharacter('Uber for horses') // => 'U'
*/
