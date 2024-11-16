// year will be leap yearif the year is divisible by 4
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeap = isLeapYear(2032);
console.log(isLeap);