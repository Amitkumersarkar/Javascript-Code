// simple calculator
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;

}
function divide(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        return multiply(a, b);
    }
    else if (operation === 'divide') {
        return divide(a, b);
    }
    else {
        return 'operation is not allowed';
    }
}
const result = calculator(15, 77, 'add');
console.log(result);