// higher order function 

// a higher order function that does at least one of the following
// * takes one or more function as an argument(parameter) OR
// * returns a function as a result 

import { posts } from "./posts.js";

posts.forEach((post) => {
    console.log(post);
});
console.clear();

const filterPosts = posts.filter((post) => {
    return post.userId === 10; // filtering all the 100 posts down to the user ID = 1; 
});
console.log(filterPosts);

const mappedPosts = filterPosts.map((post) => {
    return post.id * 10;  // talking those filtered posts and mapping them and storing them in mappedPosts 
})
console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum, post) => {
    return sum + post; 
})
console.log(reducedPosts);







