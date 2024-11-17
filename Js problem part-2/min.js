const prices = [20000, 15000, 250000, 30000, 50000];
function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        // console.log(num);
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log('cheapest one is : ', cheap);