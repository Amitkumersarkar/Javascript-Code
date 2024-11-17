const numbers = [150, 350, 1150, 2050];
const products = [
    { name: 'soap', price: 150 },
    { name: 'shampoo', price: 350 },
    { name: 'shirt', price: 1150 },
    { name: 'shoes', price: 2050 },

]

function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        // console.log(product);
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('total cost : ', total);