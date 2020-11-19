console.log('Problem Solving Q: 3 ');

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

function firstReverse(str) {
  if (typeof str === 'string') {
		const words = str.split(' ').reverse();
		const reversedWords = words.map((word) => {
			return word.split('').reverse().join('');
		});
		str = reversedWords.join(' ');
		console.log(str);
	} else {
		console.log('pass a string please...');
	}
}

/* 
Examples:
firstReverse('I Love Code'); // => 'edoC evoL I'
firstReverse('Hello World'); // => 'dlroW olleH'
firstReverse('How are you?'); // => '?uoy era woH'
*/

