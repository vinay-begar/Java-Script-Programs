




//------- Q2. Find the largest among three numbers using nested if-else.----

// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));
// let num3 = Number(prompt("Enter the third number"));

// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log(num1, "num1 is greater");
//   } else {
//     console.log(num3, "num3 is greater");
//   }
// }
// else{
//     if(num2>num3){
//         console.log(num2,"num2 is greater");
//     }
//     else{
//         console.log(num3,"num3 is greater");
//     }
// }


// Q5 Validate login credentials where username is checked first, then password.

let correctUsername = "vinay";
let correctPassword = "vin123";

let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username === correctUsername) {
  if (password === correctPassword) {
       console.log("Login successful");
       
  } else {
    console.log("Incorrect password");
    
  }
} else {
     console.log("Username not found");
     
}
