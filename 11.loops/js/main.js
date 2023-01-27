// loops 

// while loop
// let myNumber = 0; 
// while (myNumber < 50) {
//     console.log(myNumber);
//     myNumber++;
// }


// do while loop
// let myNumber = 50; 
// do {
//     console.log(myNumber);
// } while(myNumber < 50); 


// for loop 
// for(let i = 0; i <= 10; i++) {
//     console.log(i); 
// }

// let Name = "moin"; 
// for(let i = 0; i < Name.length; i++) {
//     console.log(Name.charAt(i));
// }

let Name = "moin";
let counter = 0; 
let myLetter; 
while (true) {
    myLetter = Name[counter];
    console.log(myLetter);
    if(myLetter === "n") break; 
    counter++;
}