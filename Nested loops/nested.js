// var prompt = require("prompt-sync")();

// var n = prompt("enter a number ");
// console.log(n);

// let prompt = require("prompt-sync")();

// let n = prompt("enter the number ");
// console.log(n);

/*

***
***
***
***
***

*/
//console.log("*") -> /n -> go to the nest line
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// console.log();
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// console.log();
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// console.log();
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// console.log();
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");

//WET ---> write everything twice, trice
//DRY ---> Do not repeat

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }
// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }
// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }
// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }
// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }

/*

 *  *  *  *  * 
 *  *  *  *  * 
 *  *  *  *  * 
 *  *  *  *  *
 *  *  *  *  *

*/

// for (let i = 1; i <=5; i++) {
//     for (let j = 1; j <=5; j++){
//         process.stdout.write(" * ");
//     }
//     console.log();
// }

/*

1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5


*/

// for (let i = 1; i <=5; i++) {
//     for (let j = 1; j <=5; j++){
//         process.stdout.write(j+" ");
//     }
//     console.log();
// }

/*

1 1 1 1 1 
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5

*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(i+" ");
//   }
//   console.log();
// }
/*
5 4 3 2 1 
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
*/

// for (let i = 1; i <= 5; i++) {
//   for (let j =5 ; j > 0; j--) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }
/*
5 5 5 5 5 
4 4 4 4 4
3 3 3 3 3
2 2 2 2 2
1 1 1 1 1
*/

// for (let i = 5; i >0; i--) {
//   for (let j = 5; j > 0; j--) {
//     process.stdout.write(i + " ");
//   }
//   console.log();
// }

/*

*
* *
* * *
* * * *
* * * * *


*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <=  i; j++) {
//     process.stdout.write( " * ");
//   }
//   console.log();
// }

/*

1  
2  2
3  3  3
4  4  4  4
5  5  5  5  5

*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(i+"  ");
//   }
//   console.log();
// }

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + "  ");
//   }
//   console.log();
// }

/*

AAAAA
BBBBB
CCCCC
DDDDD
EEEEE


*/

// for (let i = 65; i <= 69; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(String.fromCharCode(i));
//   }
//   console.log();
// }

/*

ABCDE
ABCDE
ABCDE
ABCDE
ABCDE


*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 65; j <= 69; j++) {
//     process.stdout.write(String.fromCharCode(j));
//   }
//   console.log();
// }

// console.log(String.fromCharCode(97));
// console.log(String.fromCharCode(48));

// Question 12:
// E D C B A
// E D C B
// E D C
// E D
// E

// for (let i = 5; i >= 1; i--) {
//   for (let j = 5; j >= 6 - i; j--) {
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }
//   console.log();
// }

// Question 15:
// * * * * *
// * * * *
// * * *
// * *
// *

// for(let i =5; i>=1; i--){
//     for(let j = 1; j<=i;j++ ){
//         process.stdout.write(" * ");
//     }
//     console.log();

// }

// Question 18:
//     A
//    BA
//   CBA
//  DCBA
// EDCBA

// for (let i = 1; i <= 5; i++) {
//       for (let j = 5; j > i; j--) {
//         process.stdout.write(" ");
//       }
//       for (let k = i; k >= 1; k--) {
//         process.stdout.write(String.fromCharCode(64+k + ""));
//       }
//       console.log();
//     }

// Question 21:
//     5
//    45
//   345
//  2345
// 12345

// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = i; k <= 5; k++) {
//     process.stdout.write(k + "");
//   }
//   console.log();
// }

// Question 24:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let num = 1; 
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(num + " ");
//     num++;
//   }
//   console.log(); 
// }

