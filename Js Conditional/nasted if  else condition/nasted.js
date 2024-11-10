// nested condition
const money = 500;
if (money > 300) {
    console.log('you have to pay half of the amount');
}
else {
    if (money > 200) {
        console.log('you have to pay half rickshaw travel bill')
    }
    else {
        if (money > 50) {
            console.log('your not allowed to come with me')
        }
    }
}