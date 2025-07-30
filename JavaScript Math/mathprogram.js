
// Q3 Write a function that generates a 6-digit OTP (One Time Password) using Math.random() 
// and Math.floor() methods.
// const min = 100000;
// const max = 900000;
// const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(`Random number: ${randomInt}`);  


// Create a function that calculates the monthly EMI (Equated Monthly Installment) for a loan using Math.pow().
//  Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1).

// let P = 5; r= 10; n=5;
 
// EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
// console.log(EMI);


// Q9 Create a function that finds the greatest common divisor (GCD) of two numbers using Math.abs(),
//  utilizing Math.floor() for integer division.


// let a = 32;
// let b = 20;

// a = Math.abs(a);
// b = Math.abs(b);

// let gcd = 1;
// let i = 1;

// while (i <= Math.floor(a) && i <= Math.floor(b)) {
//   if (a % i === 0 && b % i === 0) {
//     gcd = i;
//   }
//   i++;
// }

// console.log("GCD:", gcd); // Output: GCD: 4