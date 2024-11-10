const salary = 50000;
const isBCS = true;
const hasCar = true;
const height = 62;
if (salary > 40000 && height > 72 && isBCS == true) {
    console.log('your qualified');
}
else {
    console.log('your disqualified');
}
if ((salary > 40000 && hasCar == true || isBCS == true)) {
    console.log('your highly qualified');
}