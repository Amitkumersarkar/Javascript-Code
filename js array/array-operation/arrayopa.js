// objective: write a function to give me the sum of all numbers in an array

function sumOfNumbers(numbers) {
    // console.log(numbers);
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;

}
const nums = [50, 60, 70, 80];
const sum = sumOfNumbers(nums);
console.log('sum of number is : ', sum);
