const add = require("./modules/addToCart");
const calc = require("./modules/calculateTotal");
const remove = require("./modules/removeFromCart");
const list = require("./modules/listCart");

list();

add(1);
add(3);
add(2);
add(4);
add(5);
remove(3);
remove(5);

list()
calc();
