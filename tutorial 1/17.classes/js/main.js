// classes 

// 1
// class pizza {
//     constructor (pizzaType, pizzasize) {
//         this.type = pizzaType;
//         this.size = pizzasize;  
//         this.crust = "original";
//     }
//     bake() {
//         console.log(`baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
//     }
// }

// const myPizza = new pizza("pepperoni", "small");
// myPizza.bake(); 


// 2




// 3 ...
class pizza {
    curst = "original";
    #sauce = "traditional";
    constructor(pizzaSize) {
        this.size = pizzaSize;
    }

    getCrust() {
        return this.crust;
    }
    setCrust () {
        this.crust = pizzaCrust; 
    }
}



