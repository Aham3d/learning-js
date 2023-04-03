// // one way to export
// const playGuitar = () => {
//     return "playing guitar";
// }

// const shredding = () =>{
//     return "shredding some licks";
// }

// const plucking = () => {
//     return "plucking the strings..";
// }

// export default playGuitar; 
// export {shredding, plucking};




//another way to export
export default function playGuitar() {
    return "playing guitar";
}

export const shredding = () =>{
    return "shredding some licks";
}

export const plucking = () => {
    return "plucking the strings..";
}


