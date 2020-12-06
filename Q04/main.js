console.log('Problem Solving Q: 4 ');

/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function usernameValidation(str)
{
  const speicalChar = [/[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (str.length > 4 || str.length < 25) {
    const strArr = str.split("");
    for (let index = 0; index < speicalChar.length; index++) {
     
      
    }
  } else {
    return false;
  }
}

usernameValidation('aa_');
/*
Examples:
usernameValidation('aa_'); // => false
usernameValidation('u__hello_world123'); // => true

*/
