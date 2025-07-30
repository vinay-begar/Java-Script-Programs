//printing 1 to 10 numbers
// for (let i = 2; i <= 10; i++) {
//   console.log(i);
// }

//Multiplication Table

//  let userNumber = Number(prompt("Enter the number:"))

// for (let i = 1; i < 11; i++) {
//   let multiplication = userNumber * i;
//   // console.log(userNumber, " * ", i, " = ", multiplication);
//   //Template Literals
//   console.log(`${userNumber} * ${i} = ${multiplication}`);
// }

// console.log("Code Subtle's countdown:");
// for (let i = 10; i >= 1; i--) {
//   console.log(`Code Subtle counts: ${i}`);
// }

// //Check the factorial of the number
// let num = Number(prompt("enter a number"));
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact = fact * i ;
//   console.log(fact);//5//10//30//120
// }

//1*2 + 2*3 + 3*4 + 4*5 + 5*6
// let num = Number(prompt("enter a number"));//6
// let sum =0;
// for (let i = num; i>0; i--) {
//   sum += i*(i-1)
//   console.log(sum);//30//50//62//68//70
// }

//10*8 + 8*6 + 6*4 + 4*2
// let num = Number(prompt("enter a number"));//10
// let sum = 0;
// for (let i = num; i > 0; i=i-2) {
//   sum += (i) * (i - 2);
//   console.log(sum); //80 //128 //152 //160
// }

//1-3+3-5+5-7+7-9+9-11

// let num = Number(prompt("Enter a number "));
// let sum = 0;
// let sub = 0;
// for (let i = 1; i <= num; i += 2) {
//   sub = i - (i + 2);
//   sum = sum + sub;
//   console.log("sub val is:",sub);
//   console.log("sum val is:",sum);
// }

// find the factors of the given number
// let num = Number(prompt("Enter the number"));
// let factors;

// for (let i = 2; i <= num; i++) {
//   if (num % i == 0) {
//     factors = i;
//     console.log(factors);
//   }
// }

//find the perfect number

// let num = Number(prompt("Enter a number"));
// let num = 496;
// let factors;
// let sum = 0;
// for (let i = 1; i < num; i++) {
//   if (num % i == 0) {
//     factors = i;
//     sum = sum + factors;
//     console.log("factor value:", factors);
//   }
// }
// if (sum === num) {
//   console.log("The number is perfect number");
// }
// else{
//     console.log("not perfect");

// }

// // let num = Number(prompt("Enter a number"));
// let num = 8;
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//   if (i % 2 !== 0) {
//     sum = sum + i + (i + 1);

//     console.log(sum);
//   } else {
//     sum = sum + i - (i + 1);
//     console.log(sum);
//   }
// }

//Harshad Number

// let num = 153;
// let temp = num;
// let sum = 0,
//   digit;

// for (; num > 0; ) {
//   digit = num % 10;//3,5,1
//   sum = sum + digit;//3,8,9
//   num = Math.floor(num / 10);//15 //1
// }

// if (temp % sum == 0) {
//   console.log("Harshad Number");
// } else {
//   console.log("Not a Harshad Number");
// }

//Sum of Squres
// let num = Number(prompt("Enter a number "));
// let sum = 0;
// let square;
// for (let i = 1; i <= num; i++) {
//   square = i * i;
//   sum = sum + square;
//   console.log(sum);
// }

//Calculate the avg of number until enter the 0
// let sum = 0;
// let count = 1;
// let num;

// for (; true;) {
//   num = Number(prompt("Enter a numbers"));
//   if (num!==0) {
//     sum = sum + num;
//     avg = sum / count;
//     count++;
//   } else {
//     break;
//   }
// }

// ===============Q.3 Calculate sum of series: 1×2 + 2×3 + 3×4 + ... + 9×10=============

// let multi = 1;
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   multi = i * (i + 1);
//   sum += multi;
//   console.log(sum);
// }


// Q4. Calculate sum of series: 1×2 + 3×4 + 5×6 + ... + 11×12

// let sum = 0;
// let multi = 1

// for (let i = 1; i <= 12; i=i+2) {
//   multi = i * (i + 1)
//   sum= sum + multi
//   console.log(sum);
// }



// 5. Calculate sum of series: 1×3 + 2×4 + 3×5 + ... + 9×11

//  let num = Number(prompt("Enter a number "));
// let sum = 0;
// let multi = 0;
// for (let i = 1; i <= num; i++) {
//   multi = i * (i + 2);
//   sum = sum + multi;
//   console.log("sub multi val is:", multi);
//   console.log("sum sum val is", sum);
// }




// ============Q.6 Calculate sum of alternating series: 1-2 + 3-4 + 5-6 + ... + 9-10============

// let sub = 0;
// let sum = 0;

// for (let i = 1; i <= 10; i=i+2) {
//   sub = i - (i + 1);
//   sum += sub;
//   console.log(sum);
// }

// 7. Find all factors of a given number.

// let num = Number(prompt("Enter the number"));
// let factors;

// for (let i = 2; i <= num; i++) {
//   if (num % i == 0) {
//     factors = i;
//     console.log(factors);
//   }
// }


// 8. Check if a number is perfect (the sum of its proper divisors equals the number).

// let num = Number(prompt("Enter a number"));
// // let num = 496;
// let factors;
// let sum = 0;
// for (let i = 1; i < num; i++) {
//   if (num % i == 0) {
//     factors = i;
//     sum = sum + factors;
//     console.log("factor value:", factors);
//   }
// }
// if (sum === num) {
//   console.log("The number is perfect number");
// }
// else{
//     console.log("not perfect");

// }



// 9. Determine if a number is a Harshad number (divisible by the sum of its digits).

// let num = 143;
// let temp = num;
// let sum = 0,
//   digit;

// for (; num > 0; ) {
//   digit = num % 10;//3,5,1
//   sum = sum + digit;//3,8,9
//   num = Math.floor(num / 10);//15 //1

// }
// if (temp % sum === 0) {
//   console.log("its a harshad number");
// } else {
//   console.log("its not a harshad number");
// }    
    

// 10. Read numbers until 0 is entered and calculate their average.

// let sum = 0;
// let count = 1;
// let avg

// for (; true;) {
//   num = Number(prompt("Enter a numbers"));
//   if (num!==0) {
//     sum = sum + num;
//     avg = sum / count;
//     count++;
//   } else {
//     break;
//   } 
// }
// console.log(avg);


// 11. Check if a number is a palindrome.

// let num = Number(prompt("Enter a number"));
// let originalNum = num;
// let reverse = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
// }

// if (reverse === originalNum) {
//   console.log("Palindrome Number");
// } else {
//   console.log("Not a Palindrome");
// }


// 12. Check if a number is an Armstrong number.

// let num = Number(prompt("enter the number")); //153 //15
// let temp = num;
// let digit,
//   sum = 0;

// for (; num > 0; ) {
//   digit = num % 10; //3,5,1
//   console.log(digit);
//   cube = Math.floor(Math.pow(digit,3));
//   console.log(cube);
//   sum += cube;
//   console.log(sum);
//   num= Math.floor(num/10); //15 //1
//     console.log(num);
// }
// console.log(sum,temp);

// if (sum === temp) {
//   console.log("Number is armstrong");
// } else {
//   console.log("not an armstrong number");
// }




// 13. Check if a number is a strong number (the sum of factorials of 
// digits equals the number).





// ============ 14. The present population of a country is PO, and it increases by 5% every year.
// The population (P) after n years is given by the formula: P  =  PO (1.05)n.
// Write a program to find the population every year for the next ten years.===================

// let po= Number(prompt("enter the population:"))
// let p;

// for (n=1; n<=10; n++){
//     p= po * (1.05)*n
//     console.log(p);
// }



// Q15. Generate the series: 1 2 4 7 11 16 22

// let num = 1
// console.log(num);

// for(i=1; i<7;i++){
//     num = num+i;
//     console.log(num);

// }

// ==================Q.16 Generate the series: 0 1 3 6 10 15 21 ================

// let sum = 0;

// for (let i = 0; i <= 6; i++) {
//   sum = sum+ i;
//   console.log(sum);
// }



// ================Q.17 Generate the series: 0 3 8 15 24 35 =============================

// let num = 0;
// console.log(num);

// for (i = 3; i <= 11; i = i + 2) {
//   num = num + i;
//   console.log(num);
// }


// Q18. Generate the series: 1 2 2 4 8 32

//  let num1 = 1
//  let num2 = 2
//  console.log(num1);
//  console.log(num2);
//  for(i=1; i<5;i++){
//     num3=num1*num2;
//     num1 = num2
//     num2 = num3
//     console.log(num3);
//  }

// 19. Generate the series: 2 3 4 6 6 9 8 12 10 15

// for (let i = 1; i <= 5; i++) {
//   let even = i * 2;
//   let odd = i * 3; 
//   console.log(even); 
//   console.log(odd); 
// }




// ===============Q.20 Generate the series: 1 5 2 4 3 3 4 2 5 1=================

// let count1 = 0;
// let count2 = 6;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     count2 = count2 - 1;
//     console.log(count2);
//   } else {
//     count1 = count1 + 1;
//     console.log(count1);
//   }
// }



// 21. Generate the series: 0 7 26 63 124

// let series;
// for (let n = 1; n <= 5; n++) {
//    series = n * n * n - 1;
//   console.log(series);
// }



//22. Calculate sum: S = (1+2) + (1+2+3) + ... + (1+...+15)

// let num = 15;
// let Sum1 = 0;
// sum=0;

// for (let i = 2; i <= num; i++) {
//   Sum1 = (i * (i + 1)) /2; 
//   sum=sum+Sum1
//   console.log(Sum1);
  
// }
// console.log("The total sum  is:", Sum1);



// ====================Q.23 Display factorials of the first ten natural numbers.============

// let num = Number(prompt("enter a number"));
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
//   console.log(fact);
// }



// Q 24. Generate all perfect numbers up to 1000.

// for (let num = 1; num <= 1000; num++) {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sum = sum + i;
//     //   console.log("factor value:", i);
//     }
//   }
//   if (sum === num) {
//     console.log("The number is perfect number",sum);
//   }
// }


//25. Write a program to accept a number, then print the sum of digits 
// and the number of digits present in it.

// let number = prompt("Enter a number:");
// let sum = 0;
// let count = 0;

// for (let i = 0; i < number.length; i++) {
//   sum = sum+ parseInt(number[i]);
//   count++;
//   console.log("Sum of digits: ", sum);
// }
// console.log("Number of digits: " , count);




//=====Q.26 Write a program to check whether all digits of the given number are same type or not
// (i.e., all are odd, all even numbers, or both present) ======================

// let num = Number(prompt("enter the number:"));
// let digit;
// for (; num > 0; ) {
//   digit = num % 10;
//   if (digit % 2 === 0) {
//     console.log("its a even number");
//   } else {
//     console.log("its a odd number");
//   }
//   num = Math.floor(num / 10);
// }



// 27. Write a program to accept a number and then add all digits until you find
//  a single-digit number. If that single-digit number is 1,
// then that number is called a lucky number.
//(e.g., ifthe  number is 2345, then the sum of its digits becomes 14,
// further sum of these digits is 5, so the number is not a lucky number)

// let num = Number(prompt("Enter a number"));
// let sum;

// for (;num > 9;) {
//   sum = 0;
//   for (; num > 0; ) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
// }
// if (num === 1) {
//   console.log("Lucky number!");
// } else {
//   console.log("Not a lucky number.");
// }



// 28. Count how many odd, even, and zero values exist in 10 input numbers.

// let odd = 0;
// let even = 0;
// let zero = 0;

// for (let i = 1; i <= 10; i++) {
//   let num = parseInt(prompt("Enter number:"));
//   {
//     if (num === 0) {
//       zero++;
//     } else if (num % 2 === 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   }
// }
// console.log("Odd:", odd);
// console.log("Even:", even);
// console.log("Zero:", zero);



// ===========Q.29 Count positive, negative, and zero values among 10 input numbers.========

// for (let i = 1; i <= 10; i++) {
//   let num = Number(prompt("enter the number:"));

//   if (num > 0) {
//     console.log("positive", num);
//   } else if (num < 0) {
//     console.log("negative", num);
//   } else {
//     console.log("zero", num);
//   }
// }

// 30. Display a number between 1-10 in words.

let num = parseInt(prompt("Enter a number between 1 and 10:"));

for (let i = 1; i <= 10; i++) {
  if (i === num) {
    let word = "";
    switch (i) {
      case 1:
        word = "One";
        break;
      case 2:
        word = "Two";
        break;
      case 3:
        word = "Three";
        break;
      case 4:
        word = "Four";
        break;
      case 5:
        word = "Five";
        break;
      case 6:
        word = "Six";
        break;
      case 7:
        word = "Seven";
        break;
      case 8:
        word = "Eight";
        break;
      case 9:
        word = "Nine";
        break;
      case 10:
        word = "Ten";
        break;
    }
    console.log("You entered:", word);
  }
}

// 31. Find the second-highest number among 10 input numbers.

// let max = 0;
// let second = 0;

// for (let i = 1; i <= 10; i++) {
//   let num = parseInt(prompt("Enter number:"));

//   if (num > max) {
//     second = max;
//     max = num;
//   } else if (num > second && num != max) {
//     second = num;
//   }
// }
// console.log("Highest number ",max);
// console.log("Second highest number is: " ,second);


// let num = 30;
// let isPrime=true
// let j
// for (let i = 1; i <= num; i++) {
// if(num%i==0){
   
//     }
// }



// ====Q.32 Count how many numbers divisible by both 2 and 3 exist in 10 input numbers.====

// for (let i = 1; i <= 10; i++) {
//   let num = Number(prompt("enter the number:"));

//   if (num % 2 == 0 && num % 3 == 0) {
//     console.log("number is divisible by both 2 and 3", num);
//   }
//   else {
//     console.log("number is not divisible by 2 and 3",num);

//     }
// }


// 33. Find the LCM of two numbers.

// let a =12
// let b =18

// let g = Math.max(a, b);
// let s = Math.min(a, b);

// for (let i = g; i <= a * b; i += g) {
//   if (i % s === 0) console.log(i);
// }
