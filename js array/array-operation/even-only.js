function evenNumbersOnly(numbers) {
    const evens = [];
    for (const number of numbers) {
        // console.log(number);
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
            return evens;
        }

    }
}
const numbers = [10, 50, 25, 30];
//  evenNumbersOnly(numbers);
const evens = evenNumbersOnly(numbers);
console.log('even numbers are : ', evens);