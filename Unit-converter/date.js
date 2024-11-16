const today = new Date();
const date = new Date('2050-10-16');
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2080, 0, 25);
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate);