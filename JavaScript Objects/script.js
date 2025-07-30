//Object Literal
// const person = {
//   name: "John Doe",
//   age: 30,
//   city: "New York",
//   marks: [80, 90, 56, 85],
//   fun: (person) => {
//     console.log(`Hello! ${person}`);
//   },
// };
// person.mobile = 83838484;
// console.log(person);

// console.log(person.name);
// person.fun("vinay b");

// function abc(){
//     console.log("Hello from function");
// }
// abc()

// let kiran = [1,2,4,4,5,7]
// // console.log(typeof arr);
// // console.log(Array.isArray(person));

// console.log(kiran.length);
// kiran.push(8);
// console.log(kiran);

//2. Construction Function
// const book = new Object();
// console.log(book);
// book.title = "JavaScript Guide";
// book.author = "John Smith";
// book.pages = 350;
// book.published = true;
// console.log(book);
// console.log(book.title);

// { title: "JavaScript Guide", author: "John Smith", pages: 350, published: true }

//Object.create() -> Method
// const animal = Object.create(null);
// animal.species = "Dog";
// animal.breed = "Golden Retriever";
// animal.age = 3;
// animal.friendly = true;
// console.log(animal); // { species: "Dog", breed: "Golden Retriever", age: 3, friendly: true }

//dot notation vs bracet notation
// const employee = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   position: "Manager",
//   salary: 75000
// };

// console.log(employee.firstName); // "Sarah"
// console.log(employee.position); // "Manager"
// console.log(employee["salary"]); // 75000

// const college={
//     teacher:{
//         cs:{
//             name:"sunita rai",
//             dept:"cs"
//         },
//         IT:{
//             name:"jameet ghai",
//             dept:"IT"
//         }
//     },
//     students:{
//         name:"vitthal",
//         dept:"cs"
//     }
// }

// console.log(college["teacher"]["cs"]["name"]);

//Dynamic Property Access
// const settings = {
//   theme: "dark",
//   language: "english",
//   notifications: true
// };
// const propertyName = "theme";
// console.log(settings[propertyName]); // "dark"

// const keys = ["language", "notifications"];
// keys.forEach((key) => console.log(settings[key])); // "english", true

//Arrays forEach Method
// let arr=[2,4,5,4,32,24,5,3,2]
// arr.forEach((a, index)=>{console.log(a, index);
// })

//forEach(), map(), filter(), reduce()

// const smartphone = {
//   brand: "Apple",
//   model: "iPhone 14"
// };
// //Adding value of object
// smartphone.storage = "128GB";
// smartphone.color = "blue";
// smartphone["price"] = 799;
// //updating value of object
// smartphone.brand="nokia"
// console.log(smartphone); // { brand: "Apple", model: "iPhone 14", storage: "128GB", color: "blue", price: 799 }

//delete property of object
// const laptop = {
//   brand: "Dell",
//   processor: "Intel i7",
//   ram: "16GB",
//   storage: "512GB SSD",
//   price: 1299
// };
// delete laptop.price;
// delete laptop.storage;
// console.log(laptop); // { brand: "Dell", processor: "Intel i7", ram: "16GB" }

//Conditional chainning Deleting

// const gameCharacter = {
//   name: "Hero",
//   level: 15,
//   health: 100,
//   mana: 50,
//   temporaryBoost: true
// };
// if (gameCharacter.temporaryBoost) {
//   delete gameCharacter.temporaryBoost;
// }
// delete gameCharacter.mana;
// console.log(gameCharacter); // { name: "Hero", level: 15, health: 100 }

//Nested Objects
// const userProfile = {
//   personal: {
//     firstName: "Emma",
//     lastName: "Davis",
//     age: 28
//   },
//   address: {
//     street: "123 Main St",
//     city: "Portland",
//     zipCode: "97201"
//   },
//   preferences: {
//     theme: "dark",
//     language: "english"
//   }
// };
// console.log(userProfile.personal.firstName); // "Emma"
// console.log(userProfile.address.city); // "Portland"
// console.log(userProfile.preferences.theme); // "dark"

//Object Storage and Reference Types

// let vinay = {
//     name:"Vinay B.",
//     age:2389,
//     love:"riya",
//     func:()=>{}
// }

// let myname = vinay.name
// console.log(myname);//Vinay B.
// vinay.name="riya"
// console.log(vinay);
// console.log(myname);

//primitive
// let a = 5;
// let b = a;
// console.log(a, b);//5, 5
// b = b - 3;
// console.log(a, b);//5,2

//non-primitive (reference)
// let arr1 = [1, 2, 4, 5, 7];
// let arr2 = arr1;
// console.log(arr1, arr2);//[1,2,4,5,7]
// arr2[2] = 34;
// console.log(arr1, arr2);//arr1=[1,2,4,5,7], arr2=[1,2,34,5,7]


// function modifyUser(user) {
//   user.status = "active";
//   user.lastLogin = new Date();
// }
// const userData = {
//   username: "john_doe",
//   email: "john@example.com"
// };
// modifyUser(userData);
// console.log(userData); // { username: "john_doe", email: "john@example.com", status: "active", lastLogin: [current date] }
