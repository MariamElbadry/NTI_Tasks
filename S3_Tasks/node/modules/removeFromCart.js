let cart = require("../data/cart.js");

function removeFromCart(id) {
    const index = cart.findIndex(product => product.id == id);
    if(index == -1) console.log("This product does not exit in the cart");
    else { let name = cart[index].name;
        cart.splice(index,1);
        console.log(name + " is removed from the cart"); }
}

module.exports = removeFromCart;