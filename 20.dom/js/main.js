// DOM - Document Object Model 

// //1
// // two ways to select id
// //1. - selecting id by specific id("view1")
// const view1 = document.getElementById("view1");
// console.log(view1);
// //2. -  by specific symbold of id(#)
// const view2 = document.querySelector("#view2");
// console.log(view2);

// //2
// view1.style.display = "flex"; // on "none" = content below nav cannot be seen
// view2.style.display = "flex"; // on "none" = cannot scroll to the content below the view1

// // selecting the "view" in different methods
// const views = document.getElementsByClassName("view");
// console.log(views); // this show as the html collection  which has elements inside of it
// const sameView = document.querySelectorAll(".view");
// console.log(sameView); // and this has node list 



// // 3
// // selecting divs with query
// const divs = view1.querySelectorAll("div");
// console.log(divs); // selecting all the divs present specifically in view1, and we get the node list with all the divs
// //selecting divs with tag name
// const samedivs = view1.getElementsByTagName("div");
// console.log(samedivs); // selecting all the divs present specifically in view1, and we get the html collection with all the divs
 
// // selecting evenDivs 
// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
// console.log(evenDivs);
// for(let i = 0; i < evenDivs.length; i++) {
//     evenDivs[i].style.backgroundColor = "darkblue"; 
//     // evenDivs[i].style.width = "200px"; 
//     // evenDivs[i].style.height = "200px"; 
// }



// //4
// //selecting text of navbar
// const navText = document.querySelector("nav h1");
// console.log(navText);
// navText.textContent = "hello world!";
// const navbar = document.querySelector("nav");
// navbar.innerHTML = `<h1>Hello</h1> <p>this should align right</p>`;
// console.log(navbar);


 
// //5
// // navigating through
// console.log(evenDivs[0]); // details of the div at the position 0
// console.log(evenDivs[0].parentElement); // parent element of the same div(which is view1)
// console.log(evenDivs[0].parentElement.children); // from parent of that div to the childrens of that parent 




//6
// adding and removing from the DOM. we can create new elements that didn't exist and we can remove elements from the page 
// deleting the view1 and text from the view2 and re-creating the view1 in view2

// displaying view2 and hiding the view1
view1.style.display = "flex ";
view2.style.display = "flex"; 

// basic styling to get started
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px"

// removing the text from view2"My 2nd view"
while(view2.lastChild) {
    view2.lastChild.remove();
} 
// styling the a single div
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width= "100px";
    newDiv.style.height= "100px";
    newDiv.style.margin= "10px";
    newDiv.style.display= "flex";
    newDiv.style.justifyContent= "center";
    newDiv.style.alignItems= "center";
    parent.append(newDiv); 

}

for(let i = 0; i <12; i++) {
    createDivs(view2, i); //i = 12(means 12 boxes)
}










