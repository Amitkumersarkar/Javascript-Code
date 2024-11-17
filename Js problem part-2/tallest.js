const heights = [66, 72, 68, 60, 66];
function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        // console.log(num);
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const max = getMax(heights);
console.log('max value is :', max);