const phone = {
    brand: 'apple',
    price: 120000,
    color: 'white',
    isNew: true
}
// for of used in array
// for in used in objects
for (const prop in phone) {
    // console.log(prop)
    // console.log(phone[prop])
}
const keys = Object.keys(phone);
console.log(keys);
for (const key of keys) {
    console.log(key ,':', phone[key])
}