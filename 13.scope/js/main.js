// scope - var let const


// // global scope
// var x = 1;
// let y = 2; 
// const z = 3; 

// // local scope 
// {
//     let y = 4;
//     console.log(y);
// }

// function myFunc() {
//     const z = 5; 
//     console.log(y);
// }
// myFunc();




// ex 
var x = 1; 
let y = 2; 
const z = 3; 

console.log(`global:${x}`);
console.log(`global:${y}`);
console.log(`global:${z}`);

function myFunc() {
    var x = 10; 
    const z = 5;

    // console.log(`function:${x}`); //*
    // console.log(`function:${y}`);
    // console.log(`function:${z}`);

    {
        var x = 11; // function scope
        const z = 6; // block scope

        console.log(`block:${x}`);
        console.log(`block:${y}`);
        console.log(`block:${z}`);
    }

    console.log(`function:${x}`); //* // change in value of x in function because of var, as var is not a block scope it is a function scope
    console.log(`function:${y}`);
    console.log(`function:${z}`);
}

myFunc();





/* 
understanding scope 

* global scope = not in a function or block. not desirable (global variables are available every where so it might cause confuse and mistakes)
* local scope = in a function or block. not global 
* var = instantiates function scoped variables 
* let and const = instantiate block scoped varaibles 

tips
1. avoid using var. stick with const and let 
2. use const unless you need to reassign value.
use let if you know you will reassign value


*/








