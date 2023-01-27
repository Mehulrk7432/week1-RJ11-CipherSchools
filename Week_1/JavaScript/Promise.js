// Promise.JS
//comstructor (function)
// let mypromise = new Promise((full, nofull) =>{
//     let num1 = 10;
//     let num2 = 15;

//     let sum = num1+num2;
//     if(sum > 24) {
//         full();
//     }
//     else {
//         nofull();
//     }
// });

// mypromise.then(()=>{
//     console.log("promise was fullfilled")
// }).catch(()=>{
//     console.log("promise was not fullfilled")
// });

// function addTwoNumbers (num1, num2) {
//     let sum = 0;
//     setTimeout(()=> {
//         console.log(num1+num2);
//     }, 5000);
//     console.log("Inside addTwoNumbers");
//     return sum;

// }
// console.log(addTwoNumbers (2,3))

function addTwoNumbers (num1, num2) {
    return new Promise ((full, notfull) => {
        setTimeout(() => {
            console.log("Inside settimeout");
            full(num1 + num2);
        }, 5000);
        notfull(new Error ("An error occured !"));
    });
}

addTwoNumbers (10, 5)
.then(() => {
    console.log("Promise was fulfilled");
})
.catch(() => {
    console.log("promise was not fulfilled");
});