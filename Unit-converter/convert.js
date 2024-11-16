function inchToFeet2(inch) {
    const feet = inch / 12;
    return feet;
}
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'feet ' + inchRemaining + 'inch.'
    return result;
}
const amitHeight = inchToFeet2(75);
const amitHeight2 = inchToFeet2(75);
console.log(amitHeight2);