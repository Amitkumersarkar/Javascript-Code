//array has some duplicate elements.
const sweetLovers = ['anik', 'amrit', 'tanmoy', 'pritom'];
const numbers = [22, 25, 10, 15,];

function noDuplicate(array) {
    const unique = [];
    // console.log(array);
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
// const uniqueArray(array){
//     console.log(array);

const uniqueArray = noDuplicate(sweetLovers);
console.log(uniqueArray);