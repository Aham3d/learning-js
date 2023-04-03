// modules


// // one way to import
// import playGuitar from "./guitars.js"; // importing the default export
// // import { shredding, plucking } from "./guitars.js"; //importing other functions which are not default
// import { shredding as shred, plucking as fingerpicking } from "./guitars.js"; // we can also rename the functions while importing
// console.log(playGuitar());
// console.log(shred()); 
// console.log(fingerpicking());



//another way to import
import * as Guitars from "./guitars.js"; 
//importing all gives a problem. that we cannot import the functions all together, we have to name the default funtion as default
console.log(Guitars.default()); // naming the playguitar function as default
console.log(Guitars.shredding()); 
console.log(Guitars.plucking());


// importing class
import user from "./user.js";
const me =  new user("email@email.com", "moin"); 
console.log(me);



