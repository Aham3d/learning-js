// objects
// key-value pairs in curly braces

// // 1
// const myObj = {name: "moin"};
// console.log(myObj);  // this will show the object(name:"moin")
// // if we want to access the value of the object
// console.log(myObj.name); // this is will show the value(moin)


// // 2
// const myObj = {name: "moin"};

// const anotherObj = {
//     alive: true,
//     answer: 42,
//     hobbies: ["eat", "sleep", "code"],
//     beverage: {
//         morning: "Coffee",
//         afternoon: "Iced Tea"
//     },
//     action: function() {
//         // return "hello world!",
//         return `time for ${anotherObj.beverage.morning}`; // or you can use ${this.beverages.morning}
//     }
// }
// console.log(anotherObj.alive); //accessing the first from another object
// console.log(anotherObj.answer); //accessing the second object from another object
// console.log(anotherObj.hobbies); //accessing the whole array of hobbies
// console.log(anotherObj.hobbies[1]); //accessing the single hobbie from the arrays of hobbies
// console.log(anotherObj.beverage); //this will display the whole object 
// console.log(anotherObj.beverage.morning) // this will display the value present int the morning object, which is present inside the beverage object
// console.log(anotherObj.beverage["morning"]); // another way as the above |
// console.log(anotherObj.action()); // accessing the action method




// // 3 car
// const vehicle = {
//     wheels: 4,
//     engine: function() { //method
//         return "vrooom!";

//     }
// }

// const truck = Object.create(vehicle); //using vehicle as a constructor
// truck.doors = 2; 
// console.log(truck);
// console.log(truck.wheels); //we are inheriting from vehicle object(as we are using vehicle as a constructor)
// console.log(truck.engine()); 

// const car = Object.create(vehicle); // using vehicle as constructor and also inheriting the properties 
// car.doors = 4; //overwriting the door value 
// car.engine = function() { // overwriting the engine function here
//     return "whoosh";
// }
// console.log(car.engine()); // this will display the "whoosh"
// console.log(car.wheels); // this is still getting inherited from the vehicle object

// const tesla = Object.create(car); //car object is already ineheriting from the vehicle object. so basically we are again inheriting from the car object and also from the vehicle from the vehicle object at the same time
// console.log(tesla.wheels); // - 4
// console.log(tesla.engine()); // it says the same method as we set to the car object - "whoosh"
// tesla.engine = function() { // overwriting the engine methos for tesla
//     return "ssssss";
// }
// console.log(tesla.engine()); // - "sssss"





// // 4 band
// const band = {
//     vocals: "Robert Plant",
//     guitar: "Jimmy Page",
//     bass: "John Paul Jones",
//     drums: "John Bonham"
// };

// console.log(Object.keys(band));
// console.log(Object.values(band));



 







