// arrays

const myArray = [];
// adding elements to an array
myArray[0] = "dave"; 
myArray[1] = 24987;
myArray[2] = false;
// refer to an array
console.log(myArray);
// length property 
console.log(myArray.length);
// refer to the last element of the array
console.log(myArray[myArray.length-1]);
console.log(myArray[2]);



// adding more elements to the array
//push() adds the element to the last index of the array
myArray.push("school"); 
console.log(myArray)

// // removing last added element from an array
// myArray.pop();
// // back to 3 elements in array
// console.log(myArray);

// we can also return the last popped element
const lastItem = myArray.pop();
// displaying the last removed element
console.log(lastItem);


// adding the element in the beginning of the array
myArray.unshift(42);
console.log(myArray);
// removing the same element(begi  nning element which was added by using unshift())
myArray.shift();
console.log(myArray);   


// to delete an element from an array .splice(index of the element, no of element)
myArray.splice(0,1); //deleted index 1 = dave
console.log(myArray);
// we can also use the splice to replace the element after deleting the element;
myArray.splice(0,0,43); // replaced 43 in that position(index 1)
console.log(myArray);

// reverse method
const reverse = ["A", "B", "C", "D", "E", "F"];
reverse.reverse();
console.log(reverse);

// join method
const joinEx = ["A", "B", "C", "D", "E", "F"];
console.log(joinEx.join());
// - it takes the elements from the array and converts it into string and puts the ',' between them


// concat method
const myArrayA = ["A", "B", "3"];
const myArrayB = ["C", "D", "4"];

let myArrayAB = myArrayA.concat(myArrayB);
console.log(myArrayAB);

// new concat method

let myArrayBA = [...myArrayB, ...myArrayA];
console.log(myArrayBA);



// arrays in different DIMENSION

// single DIMENSION
const equipShelfA = ["baseball", "footballs","volleyball"];
const equipShelfB = ["basketball", "golf ball", "tennis ball"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];
// logging in to single DIMENSION
console.log(equipShelfA[1]); // we'll get fooball here 1
console.log(clothesShelfB[0]); // we'll get sweat tops 1

// 2 DIMENSION
// - assigning both equipShelfA and equipShelfB to equipDept
// - assigning both clothesShelfA and clothesShelfB to clothesDept

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];
// logging in to 2 DIMENSION 
console.log(equipDept[0][1]); // we'll get fooball here 2 
console.log(clothesDept[1][0]); // we'll get sweat tops here 2

// 3 DIMENSION
// assigning both equipDept and clothesDept to sportsStore
 const sportsStore = [equipDept, clothesDept];
// logging in to 3 dimension
console.log(sportsStore[0][0][1]) // we'll get football here 3 
console.log(sportsStore[1][1][0]) // we'll get sweat tops here 3






 

