// Q3  Arrow Function: Write an arrow function sumOfDigits that takes a number and returns
//  the sum of its digits using a while loop. Test with numbers 12345 and 9876.

// num=Number(prompt("Enter a number"))
// function sumOfDigits(num) {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }
// console.log(sumOfDigits(num));

// Q6  Rest Parameters: Create a function findMinMax that accepts any number of integers
//     using rest parameters and returns an object with minimum and maximum values using loops.

// function findMinMax(...numbers) {
//   let min = numbers[0];
//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return { min, max };
// }
// console.log(findMinMax(5, 1, 8, 7, 10));

//  Q9  Higher Order Function: Write a higher-order function applyOperation
//  that takes an array of numbers and a callback function, then applies the callback
//   to each number if it's greater than 10 using loops and conditions.

// let numbers = [5, 12, 3, 18, 9];

// function applyOperation(numbers) {
//     let num = [];

//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 10) {
//             num.push(numbers[i]);
//         }
//     }
//     return num;
// }
// let result = applyOperation(numbers);
// console.log(result);

// Q12  Pure Function: Write a pure function fibonacciSequence that takes a number n and returns an array of the first n Fibonacci numbers using a loop, without modifying any external variables.

// function fibonacci(n) {
//     let fibSeries = [0, 1];
//     for (let i = 2; i < n; i++) {
//         let next = fibSeries[i - 1] + fibSeries[i - 2];
//         fibSeries.push(next);
//     }
//     return fibSeries;
// }
// let result = fibonacci(10);
// console.log(result);

// Q15 Function with Rest Parameters and Loops: Write a function analyzeNumbers that accepts any number of integers using rest parameters, then uses nested loops to find all pairs of numbers whose sum equals a target value (passed as the first parameter).

// function analyzeNumbers(target, ...numbers) {
//   let pairs = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         pairs.push([numbers[i], numbers[j]]);
//       }
//     }
//   }

//   return pairs;
// }
// console.log(analyzeNumbers(10, 2, 4, 6, 8, 5, 3));  
    

//Q18. IIFE with Mathematical Series: Create an IIFE that takes two parameters (start and end) and immediately calculates the sum of all perfect numbers within that range using nested loops to check if a number equals the sum of its proper divisors.

// (function (start, end) {
//   function sumOfFactors(n) {
//     let sum = 0;
//     for (let f = 1; f <= n / 2; f++) {
//       if (n % f === 0) {
//         sum += f;
//       }
//     }
//     return sum;
//   }
//   let total = 0;

//   for (let i = start; i <= end; i++) {
//     if (i > 0 && i === sumOfFactors(i)) {
//       console.log("Perfect number:", i);
//       total += i;
//     }
//   }
//   console.log(total);
// })(1, 100); 

// function sumOfFactors(n) {
//   let sum = 0;
//   for (let f = 1; f <= n/2; f++) {
//     if (n % f == 0) {
//       sum = sum+f;
//     }
//   }
//   return sum;
// }
// function SumofRange(start, end) {
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     if (i > 0 && i == sumOfFactors(i)) {
//       console.log("Perfect number", i);
//       sum = sum+ i;
//     }
//   }
//   return sum;
// }
// let total = SumofRange(1, 100);
// console.log(total);
