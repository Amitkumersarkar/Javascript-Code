function woodQuantity(chairQuantity, bedQuantity, tableQuantity) {
    const perChairWood = 3;
    const perBedWood = 50;
    const perTableWood = 60;

    const chairTotalWood = chairQuantity * perChairWood;
    const bedTotalWood = bedQuantity * perBedWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const totalWood = chairTotalWood + bedTotalWood + tableTotalWood;
    return totalWood;
}
const wood = woodQuantity(0, 0, 1);
console.log('wood needed', wood);