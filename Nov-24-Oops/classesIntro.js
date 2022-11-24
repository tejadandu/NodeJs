class Product{
    discount = 10;  // we are not using any let, var, const to initilize the member
    constructor(n, p){
        // constructor function to create new real life instances called as object
        // When we create an object `this` constructor is the first fucntion that gets called

        this.name = n;
        this.price = p;

    }

    displayProduct(){
        console.log(this.name, this.price, this.discount);
    }

    buyProduct(){

    }
}


let iphone = new Product('Iphone 11', '50000');
let macbook = new Product('Macbook air', '100000');


console.log(iphone, macbook);
console.log(typeof iphone);
iphone.displayProduct();



// let obj = {
//     name : 'Teja',
//     age : 28
// }


