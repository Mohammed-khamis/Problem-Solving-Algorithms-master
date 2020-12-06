console.log('Problem Solving Q:15 ');

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(str1, str2) {
	const arr1 = str1.split('');
	const arr2 = str2.split('');
	const commonArr = [];
	for (let j = 0; j < arr1.length; j++) {
		for (let i = 0; i < arr2.length; i++) {
			if (
				!commonArr.find((item) => arr1[j] === item) &&
				arr1[j] !== ' ' &&
				arr2[i] === arr1[j]
			)
				commonArr.push(arr1[j]);
		}
	}
	return commonArr.join('');
}

/* 
Examples:
commonCharacters('abc', 'abc') // => 'abc'
commonCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
commonCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/
