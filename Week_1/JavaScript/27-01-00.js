// In JavaScript, we can declare a variable in 3 ways
// 1. by using var
// 2. by using let
// 3. by using const

// var myname = "John";
// console.log(myname)
// myname = "Alex";
// console.log(myname)
// const myName = [];
// myName.push("john")
// console.log(myName)

// let myName = "John";
// console.log(myName);
// myName = "Alex";
// console.log(myName);

// {
//     var num = 5;

// }
// console.log(num);

// //String interpolition
// let firstName = "Shiva";
// let lastName = "Kumar";

// console.log(firstName + " " + lastName)

// // let fullName = firstName+" "+lastName
// let fullName = `${firstName}${lastName}`

// // Default Params

// // function AddTwoNumbers (num1, num2) {
// //     return num1+num2;
// // };

// // function declare using arrow function
// // let AddtwoNumbers = (num1, num2) => {
// //     return num1+num2;
// // };
// let AddtwoNumbers = (num1, num2) => num1+num2;
// console.log(AddtwoNumbers(1,2));

// let AddTwoNumbers = (num1, num2) => num1+num2;
// console.log(AddTwoNumbers(1));

// let AddTwonumbers = (Num1, Num2 = 5) => {
//     console.log(Num1);
//     console.log(Num2);
//     console.log(AddTwonumbers(1));
//     return Num1+Num2;
// };

// Rest and spread operator are applicatble inarrays and objects in JS
// let array = [5,10,25,20,25];
// //Spread operator -> ...
// console.log(...array);
// // copy of an array
// let newArray = [...array];
// console.log(array);

//Rest -> ...
let maxOfTwoNumbers = (num1, num2) => Math.max (num1,num2);
let maxOfthreeNumbers = (num1, num2, num3) => Math.max(num1,num2,num3)
let maxOfNumbers = (...numbers) => {
    let maximum = Number.MIN_VALUE;
    for(let number of numbers) {
        maximum = Math.max(maximum, number)
    }
    return maximum;
};
console.log(maxOfNumbers(1,2,3,4))
maxOfNumbers(1,2,3,4,5,6,7,8);

//For object
let object = {
    name: "John",
    age: 24,
    city: "New York",
    //shallow copy
    address: {
        city1: "delhi",
        state: "NY",
        country: "India",
    },
};
//clone of object
let object2 = {...object,country:"USA", favoriteSong:"Letsgo"};
//Shallow copy
console.log(object2)
object2.address.city1 = "Mumbai";
console.log(object)
// Deep copy
let object3 = JSON.parse(JSON.stringify(object));
console.log(object3)
