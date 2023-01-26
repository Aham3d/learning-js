// Strings 
const myVariable = "Mathematics"; 



// to get character at the index of
console.log(myVariable.charAt(3));
// to get the index of a certain character
console.log(myVariable.indexOf("at"));
// to get the last occurance of a certain character
console.log(myVariable.lastIndexOf("at"));

// to slice the string from an index to other index
console.log(myVariable.slice(0,4));

// to chage case of a string
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase())

// includes method returns the boolean data after checking if the string contains or matches the provided data
console.log(myVariable.includes("div"))
console.log(myVariable.includes("Mathematics"))
 
// splits the string
console.log(myVariable.split("")); // splits every letter into string
console.log("john,joe,dave".split(",")) // separates into string without the ','
console.log("my name is ahamed".split(" ")) // separates into string excluding 'space'

