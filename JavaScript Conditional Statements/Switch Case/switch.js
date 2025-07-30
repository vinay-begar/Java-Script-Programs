// 1. Check if an entered character is a vowel.

// let char = prompt("enter a character");

// switch (char) {
//   case "a":
//   case "A":
//   case "e":
//   case "E":
//   case "i":
//   case "I":
//   case "o":
//   case "O":
//   case "u":
//   case "U":
//     console.log("its a vowel");
//     break;

//   default:
//     console.log("not a vowel");
// }

// Q6. Convert a grade letter to its corresponding GPA value.
// let grade =prompt("Enter your grade letter");
// let gpa;

// switch (grade) {
//   case "O":
//     gpa = 10;
//     console.log("its 'O' grade");
//     break;
//   case "A":
//     gpa = 8;
//     console.log("its 'A' grade");
//     break;
//   case "B":
//     gpa = 5;
//     console.log("its 'B' grade");
//     break;
//   case "C":
//     gpa = 3;
//     console.log("its 'C' grade");
//     break;
//   case "D":
//     gpa = 2;
//     console.log("its 'D' grade");
//     break;

//     default:
//      console.log("student is fail");
        
// }
// console.log("your gpa is",gpa);



// Q9. Create a menu-driven program to:
//    - Display all factors of a number (excluding the number itself)
//    - Calculate factorial of a number

// console.log("Choose the options:");
// console.log("for factors of number press 1");
// console.log("for factorial press 2");

// let option = Number(prompt("Enter the option:"))

// let num = Number(prompt("Enter the number:"))

// switch (option) {
//   case 1:
//     for (let i = 1; i < num; i++) {
//       if (num % i === 0) {
//         console.log(i);
//       }
//     }
//     break;

//   case 2:
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i ;
//     console.log(fact);
// }
//     break;
// }

// 12. Develop a menu-driven program to:
//     - Generate the first 10 terms of the Fibonacci series
//     - Find the sum of digits in an integer

// console.log("Choose the options:");
// console.log("for Generate first 10 terms Fibonacci series of press 1");
// console.log("for sum of digits in an integer press 2");

// let option = Number(prompt("Enter the option:"))
// //0,1,1,2,3,5,8,13,21
// switch (option) {
//   case 1:
//     let n1 = 0,
//       n2 = 1;
//     let sum = 0;
//     for (i = 0; i <= 10; i++) {
//       console.log(n1);
//       let sum = n2 + n1;
//       n1 = n2;
//       n2 = sum;
//     }
//     break;

//   case 2:
//     let num = Number(prompt("Enter the number:"));
//     let sum1 = 0;
//     for(;num>0;){
//     sum1+=num%10
//     num = Math.floor(num / 10);
//     console.log("Sum of digits:", sum1);
//  }

//  break;
// }