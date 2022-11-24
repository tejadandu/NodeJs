// `new` keyword
// 1. create a brand new empty object
// 2.
// 3.
// 4. `this` keyword referes to the calling site
function Product(n, p) {
    this.name = n;
    this.price = p;
    this.display = function (){
        console.log(this.name, this.price);
    }
    // return this;
    // assume --> return `this`
    // return {name: "Teja", age:28}
    // return 10;
}

// const p1 = new Product('Iphone11', 10000);
// console.log(p1);
// p1.display();


// const p2 = Product("alskdjf", 123452345);
// console.log(p2);

const p3 = Product('Macbook', 10000);
// p3.display();
console.log(p3);

