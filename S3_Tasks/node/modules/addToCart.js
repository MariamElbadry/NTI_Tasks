let products = require("../data/products.js");
let cart = require("../data/cart.js");

function addToCart(id) {
    const index = products.findIndex(product => product.id == id);
    if(index == -1) console.log("This product does not exit");
        else { cart.push(products[index]);
        console.log(products[index].name +" is added to the cart"); }
}

module.exports = addToCart;
