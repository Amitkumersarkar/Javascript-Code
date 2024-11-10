// semi advanced ternary
let price = 1000;
const isLeader = false;
if (isLeader === true) {
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price);

// ternary condition apply here

price = isLeader === true ? 0 : price + 100;

// semi advanced ternary
if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 500;
