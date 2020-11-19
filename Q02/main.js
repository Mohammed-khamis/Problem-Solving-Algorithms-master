console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function longestWord_2(sen) {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,-.<>\/?~]/;
  const wordsArr = sen.split(" ");
  let output = "";
  for (let index = 0; index < wordsArr.length; index++) {
    const word = wordsArr[index].split("");
    const count = word.length;
    for (let index = 0; index < count; index++) {
      if (format.test(word[index])) {
        word.splice(index, 1);
      }  
    }
    if (output.length < word.join().length) {
      output = word.join("");
    }
  }
  return output;
}

/* 
Examples:
longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'
*/
