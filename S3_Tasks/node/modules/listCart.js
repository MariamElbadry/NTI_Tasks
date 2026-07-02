let cart = require("../data/cart.js");

function listcart() {
    console.log("====================Cart====================");
    if(cart.length) console.log(cart);
    else console.log("==================NO Products in Cart==================");
}

module.exports = listcart