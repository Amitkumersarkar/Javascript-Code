// those year that is not divisible by 100, if the year is divisible by 4 then it will be a leap year
function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {

        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {

        return false;
    }
}
const isLeap1 = isLeapYear2(2100);
const isLeap2 = isLeapYear2(2400);
const isLeap3 = isLeapYear2(2800);
const isLeap4 = isLeapYear2(2026);
console.log(isLeap1, isLeap2, isLeap3, isLeap4);


