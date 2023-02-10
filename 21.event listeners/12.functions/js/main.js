// javascirpt event listeners

// view1.style.display = "none";
view2.style.display = "flex"; 
// view3.style.display = "none";


const view = document.querySelector("view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// syntax: addEventListener(event, function, useCapture)

// //1
// const doSomething = () => {
//     alert("doing something");
// }

// h2.addEventListener("click", doSomething, false);  
// h2.removeEventListener("click", doSomething, true);

// h2.addEventListener("click", (event) => {
//     console.log(event.target);
//     EventTarget.textContent = "clicked";
// })


//2 
document.addEventListener("readystatechange", (event) =>{
    if(event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundcolor = "purple";
    });

    div.addEventListener("click", (event) => {
        view.style.backgroundcolor = "blue";
    });

    h2.addEventListener("click", (event) => {
        event.target.textContent = "clicked";
    });
}


