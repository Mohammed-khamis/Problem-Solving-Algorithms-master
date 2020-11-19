console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

function longestWord(sen) {
  const LongestWord = (sen) => {
	if (sen.length === 0) {
		return 'there are 0 words';
	}
	let output = '';
	const words = sen.split(' ');
	for (let index = 0; index < words.length; index++) {
		if (words[index].length > output.length) {
			output = words[index];
		}
	}
	return output;
};
}

/* 
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/
