// numbers
  
const myNumber = 42; 

console.log(myNumber); 


// 0 decimal after decimal point gets ingonerd 
const myFloat = 42.0; 
// number with 0 after decimal point gets printed 
const myFloat1 = 42.01; 

console.log(myFloat)
console.log(myFloat1)


// string color in console is white
const myString = "42"; 

console.log(myString); 


// comparing myNumber and myFloat reuslts in true as decimal value get ignored in myfloat
console.log(myNumber === myFloat) //true
// as decimal value will not ignored in myFloat1 
console.log(myNumber === myFloat1) //false
// comparison results in falso as the data types are different
console.log(myString === myNumber) //false

// converting string data type of myString to number by using explicit conversion
console.log(Number(myString) === myNumber);

// coverting a data that connot be coverted to number, it'll return NaN(not a number)
console.log(Number("dave")); 




