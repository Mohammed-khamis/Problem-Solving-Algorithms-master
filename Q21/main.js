console.log('Problem Solving Q: 21');

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
	const arr = str.split('');
	const uniqueArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
			uniqueArr.push(arr[i]);
		}
	}
	return uniqueArr.join('');
}

console.log(onlyUnique('hello there'));
console.log(onlyUnique('xyz'));
console.log(onlyUnique('iiii'));

/* 
Examples:
onlyUnique('hello there') // => 'o tr'
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/
