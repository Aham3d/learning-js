// fetch API requires a discussion of..
// Callbacks, Promises, Thenables, and Async/Await


// //Callbacks 
// function firstFunction(parameters, callback) {
//     callback();

// }
// firstFunction(para, function() {
//     secondFunction(para, function() {
//         thirdFunctino(para, function() {

//         })
//     })
// })



// //Promises 

// // 3 states = pending, fulfilled, rejected
//// fulfilled
// const myPromise = new Promise((resolve, reject) => {
//     const error = false; 
//     if(!error) {
//         resolve("yes! resolved the promise");
//     } else {
//         reject("no! rejected the promise");
//     }
// });
// console.log(myPromise); // we get the state of the promise 

// // Thenables
//// myPromise
// .then(value => {
//     // console.log(value); // returns the promise(resolve or reject)
//     return value + 1; // updating the value(resolve or reject)
// })
// .then(newValue => {
//     console.log(newValue); //returns the updated the promise with added 1 with it
// });

// // pending
// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users); 


// 












