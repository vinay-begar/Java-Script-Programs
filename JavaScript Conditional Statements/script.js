// let num = prompt("enter a number")
// if(num%3==0 && num%5==0 ){
//     console.log("Number is divisble by 3");

// }
// else if (num%3==0){
//     console.log("number is divisble 5");

// }
// else if(num%5==0){
//     console.log("number is not divisble");

// }
// else{
//     console.log("number is not divisble by given number");

// }

// // *** Swapping 2 numbers**
// //step1
// let num1= Number(prompt("take 1 input from the user"))
// let num2= Number(prompt("take  2 input from the user"))

// //step2
// let average=(num1 + num2)/2
// console.log('The average is',average);

// //step3
// if(num1>average){
//     let temp=num1
//     num1=num2
//     num2=temp
//     console.log('if statment',num1,num2);
// }
// else{
//     console.log('else statment',num1,num2);

// }

//** LEAP YEAR */

//  //step1:
// let year = Number (prompt("enter the year"))

// // step2:
// if (year%4==0 && year%100!= 0 || year%400==0){
//     console.log('leap year');

// }
// // step3:

// else if (year%400==0){
//     console.log('centurey year is a leap year');

// }

// // step4:
// else{
//     console.log('year is not a leap year');

// }

// Q1*Temperature Checking */

// step1:
// let temperature = Number(prompt("Enter the Temperature"))

// // step2:

// if (temperature < 0) {
//   console.log("very cold");
// }
// // step3:

// else if (temperature < 16) {
//   console.log("Cold outside");
// }
// // step4:

// else if (temperature < 25) {
//   console.log("Wheather is ok");
// }
// // step5:

// else if (temperature < 35) {
//   console.log("lets go for swim");
// }
// // step6:

// else if (temperature < 45) {
//   console.log("turn on ac");
// }
// // step7:

// else {
//   console.log("too hot");
// }

// Q2*** ELCETRICTY  */
//step:1
// let unit =  Number (prompt('Enter the Meter number'))

// //step:2
// if (unit>0 && unit <=100){
//     console.log('unit consumed rate 0.80');

// }

// //step:3
// else if (unit>= 100 && unit <=200){
//     console.log('unit consumed rate 1.2');

// }

// //step:4
// else if (unit>= 200 && unit <=300){
//     console.log('unit consumed rate 1.5');

// }

// //step:5
// else if (unit >=300){
//     console.log('unit consumed rate 1.8');

// }

// //step:6
// else{
//     console.log('no consumed rate');

// }

// Q3**RESULT OF 3 SUBJECTS */
// step1:
//
// let num1 = Number(prompt("enter first sub marks"));
// let num2 = Number(prompt("enter second sub marks"));
// let num3 = Number(prompt("enter third sub marks"));

// // // step2:
// let average = (num1 + num2 + num3) / 3;
// console.log("The avrage is", average);

// // step3:
// if (average >= 35 && average <= 50) {
//   console.log("third division");
//step4:
// } else if (average >= 50 && average <= 60) {
//   console.log("second division");
//step5:
// } else if (average >= 60 && average <= 70) {
//   console.log("first division");
//step6:
// } else if (average >= 70) {
//   console.log("Distinction");
//step7:
// } else {
//   console.log("fail");
// }

//Q5** Quantity and Purchased */
// step1:
// let rate = Number (prompt("enter the rate"))
// let quantity = Number (prompt("enter the quantity"))
// // step2:
// let total = (rate*quantity)
//     console.log('total amount is:',total);
//     // step3:
//     if (total >= 100 && total <= 500) {
//       console.log("a key ring");
//     }
//     // step4:
//     else if (total >= 500 && total <= 1000) {
//       console.log("a leather purse");
//     }
//     // step5:
//     else if (total >= 1000) {
//       console.log("a pocket calculator");
//     }
//     // step6:
//     else {
//       console.log("ye nalla parit ho sakta hai");
//     }

// Q.4 to calculate the gross salary of the employee for the conditions given below:

// basic sal                      DA              HRA             Convey

// >=5000                         110%            20%             500 //12000

// >=3000 && <5000                100%            15%             300 //6750

// <3000                          90%             10%             200 // 2500 => 5200

//Step 1 : declaring element
// let gross_salary = 0,
//   da,
//   hra,
//   convey;

// //step 2: taking basic salary as a input from from the user
// let basic_sal = Number(prompt("Enter the salary of an employee"));

// //step 3: providing gross salaries according to their base salary
// if (basic_sal < 3000) {
//   da = (basic_sal * 90) / 100;
//   hra = (basic_sal * 10) / 100;
//   convey = 200;
//   gross_salary = basic_sal + da + hra + convey;
//   console.log(gross_salary);
// }

// else if (basic_sal >=3000 && basic_sal<5000) {
//   da = (basic_sal * 100) / 100;
//   hra = (basic_sal * 15) / 100;
//   convey = 300;
//   gross_salary = basic_sal + da + hra + convey;
//   console.log(gross_salary);
// }

// else{
//     da = (basic_sal * 110) / 100;
//     hra = (basic_sal * 20) / 100;
//     convey = 500;
//     gross_salary = basic_sal + da + hra + convey;
//     console.log(gross_salary);
// }