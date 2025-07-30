// 3. Find the ASCII value of a character
// Write a function to return the ASCII value of a given character.

// let char = "A";
// function getAsciiValue(char) {
//   return char.charCodeAt(0);
// }
// let asciiValue = getAsciiValue(char);
// console.log(asciiValue);

// 6. Count the number of vowels
// Write a function to count how many vowels are present in a given string.

    // // let str = "vinay"
    // function isVowel(ch) {
    //   return (
    //     ch == "a" ||
    //     ch == "e" ||
    //     ch == "i" ||
    //     ch == "o" ||
    //     ch == "u"
    //   )
    // }
    // function countVowels(str) {
    //   let count = 0;
    //   for (let i = 0; i < str.length; i++) {
    //     if (isVowel(str[i])) {
    //       count++;
    //     }
    //   }
    //   return count;
    // }
    // console.log("countofvowels",countVowels("vinay"));


// 9. Print the given string in reverse order
// Write a function to reverse a string and display it.


//     let inputString = "Hello";  
//     function reverseString(str) {
//     let firstWord = str.split(' ')[0]; 
//     return firstWord.split('').reverse().join(''); 
// }
// console.log(reverseString(inputString)); 



// 12. Remove brackets from an algebraic expression
// Write a function to remove all types of brackets ( ), [ ], { } from a mathematical expression.


// 15. Calculate the frequency of characters in a string
// Write a function that counts how many times each character appears in a string.
function countCharOccurrences(str) {
  const charCounts = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  return charCounts;
}
console.log(countCharOccurrences("helloworld"));