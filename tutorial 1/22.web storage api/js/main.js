// web storage api


// // 1
// window.alert("ok!");
// alert("ok");

// // 2
// window.alert(window.location);
// alert(location);

// // 3
// const myObj = {
//     name: "moin",
//     logName: function() {
//         console.log(this.name);
//     }
// }

// const myArray = ['eat', 'sleep', 'code']; 

// sessionStorage.setItem("mySessionStore", myArray);
// const mySessionData = sessionStorage.getItem("mySessionStore");
// console.log(mySessionData); // we get the data from the myArray in string format


// // 4
// const myArray = ['eat', 'sleep', 'code']; 
// const myObj = {
//     name: "moin",
//     hobbies: ['eat', 'sleep', 'code'],
//     logName: function() {
//         console.log(this.name);
//     }
// }


// sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData); // we get the obj with an array

// note: just change the sessionStorage to localStorage for another two examples  



// 5
const myArray = ['eat', 'sleep', 'code']; 
const myObj = {
    name: "moin",
    hobbies: ['eat', 'sleep', 'code'],
    logName: function() {
        console.log(this.name);
    }
}

localStorage.setItem("myLocalStorage", JSON.stringify(myArray));
// localStorage.clear(); //deleting the data before we can see on console
const key = localStorage.key(0); // first parameter position of set item 
console.log(key); 
const storeLength = localStorage.length;
console.log(storeLength); //getting the length of the localStorage
const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));
console.log(myLocalData);

// sessionStorage is the 
// localStorage is the permanent storage. it stays even after restarting website
