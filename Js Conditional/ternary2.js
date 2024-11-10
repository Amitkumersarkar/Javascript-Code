// var and let keyword are similar but advanced case we used let keyword
let price = 500;
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