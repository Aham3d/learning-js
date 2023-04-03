// conditionals: switch statements 

// syntax 
// switch (expression or value) {

// case choice1:
//     // run this code
//     break; 

// case choice2:
//     // run this code 
//     break; 

// // can add as many cases as needed 

// default:
//     // run this code if no case matches 
//     // no break 

// }



// switch(1) {
//     case 1: 
//         console.log(1);
//         break; 

//     case 2:
//         console.log(2);
//         break; 

//     case 3:
//         console.log(3);
//         break; 

//     default:
//         console.log("no mactch")
// }



// generating 5 random numbers
// switch(Math.floor(Math.random() * 5 + 1)) {
//     case 1:
//         console.log(1);
//         break; 
//     case 2:
//         console.log(2); 
//         break; 
//     case 3:
//         console.log(3);
//         break; 

//     default:
//         console.log("no match");

// }



// switch statement for rock paper scissors

let player = "scissor";
let computer = "paper"; 

switch(player) {
    case computer:
        console.log("tie game");
        break; 
    case "rock":
        if(computer === "paper") {
            console.log("computer wins");
        }
        else {
            console.log('player wins')
        }
        break; 
    case "paper":
        if(computer === "scissor") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }
        break; 
    case "scissor":
        if(computer === "rock") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }
        break; 
}



// ternary operator

// syntax
// condition ? iftrue : iffalse; 

// let soup = "veg noodle soup"; 
// let response = soup === "chicken noodle soup" ? "yes, we have soup." : "sorry no soup today";
// console.log(response);

// nested ternary operators 
// let soup = "veg noodle soup";
// let customerBanned = true; 
// let soupAcces s = customerBanned ? "sorry, no soup for you" : soup === "chicken noodle soup" 
// ? `yes, we have ${soup}` 
// : "sorry, no soup today.";

// console.log(soupAccess);


//  ternay operator for testScore
// let testScore = 79; 
// let Grade = testScore > 89 ? "A"
// : testScore >= 79 ? "B"
// : testScore >= 69 ? "c"
// : testScore >= 59 ? "D"
// : "F"; 

// console.log(`my grade is ${Grade}`);

