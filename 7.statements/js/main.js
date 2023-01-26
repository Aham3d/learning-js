// conditionals: if statements



// 1
// let soup = "veg noodle soup"; 
// let reply; 

// if(soup === "chicken noodle soup") {
//     reply = `here's your order of ${soup}`;
// }
// else {
//     reply = `sorry, we're out of ${soup}`;
// }

// console.log(reply)



// 2 
// let customerIsBanned = false; 
// let soup = true;
// let crackers = true;
// let reply;


// if(customerIsBanned) {
//     reply = "no soup for you";
// }
// else if(soup && crackers) {
//     reply = `here's is your order of soup and crackers`;
// }
// else if(soup === "chicken noodle soup") {
//     reply = `here's is your order of ${soup}`;
// }
// else {
//     reply = `sorry, we are out of ${soup}`;
// }

// console.log(reply);



// 3 
// let testScore = 80; 
// let collegeStudent = false;
// let grade;

// if(testScore >= 90) {
//     grade = "A";
// } else if(testScore >=80) {
//     grade = "B";
// } else if(testScore >= 70) {
//     grade = "C";
// } else if(testScore >= 60) {
//     grade = "D";
// } else {
//     if(collegeStudent) {
//         grade = "U";
//     } else {
//         grade = "F";
//     }
// }


// console.log(grade)



// 4 

let player ="paper"; 
let computer = "scissor";
let message; 

if(player === computer) {
    message = "game tied";
}   
else if(player === "rock") {
    if(computer ==="paper") {
        message = "computer won";
    } else {
        message = "player won";
    }
}   
else if (player === "paper") {
    if(computer === "scissor") {
        message = "computer won";
    } else {
        message = "player won";
    }
}   
else {
    if(player === "rock") {
        message = "computer won";
    }
    else {
        message = "player won";
    }
}

console.log(message);