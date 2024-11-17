const amit = 60;
const anik = 50;
if (amit > anik) {
    console.log('amit will get the job placement');
}
else {
    console.log('anik will get the internship');
}
// inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
const max = getMax(50, 60);
console.log('max of the two number is : ',max);