// JSON: Javascript Object Notation
/* 

JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meanind JSON is used to send and receive data in many languages not just in javascript
sending JSON will convert the object into a string and also we'll lose the method functin present in it 
recieving JSON will convert the string into a object again and as we have lost the method function while sending it we cannot get that back

*/

const myObj = {
    name:"moin",
    hobbies: ["eat", "sleep", "code"],
    hello:function() {
        console.log("hello!");
    }
}

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);


const sendJSON = JSON.stringify(myObj); // object converted into string. so the values present in the object is displayed as an string and also we cannot access the method which is inside of an object.
console.log(sendJSON); 
console.log(typeof sendJSON); //string
console.log(sendJSON.name); // we cannot access the name as we can access from object. 

const receiveJSON = JSON.parse(sendJSON); //recieve JSON will be recieved as an object again. but also we cannot access(display) the method as we lost it while sending JSON
console.log(receiveJSON); 
console.log(typeof receiveJSON); //object again

