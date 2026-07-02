let cart = require("../data/cart.js");

function calculateTotal() {
    let sum = 0;
    cart.forEach((product) => sum+=product.price);
    console.log("Total Price:" + sum);
}

module.exports = calculateTotal;
