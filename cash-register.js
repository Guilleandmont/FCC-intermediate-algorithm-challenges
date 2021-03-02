"use strict";

//Input: the price of an item, the amount the client pays in cash, and a 2D array with the cash in drawer
//(cid)
//Output:
//An object of the form {status: "", change: ""} that returns:
//{status: "INSUFFICIENT-FUNDS", change: []} when the exact change can't be given.
//{status: "OPEN", change: ["currency", amount]} when giving change successfully.
//{status: "CLOSE", change: cid} when the amount of change to be given is the same as what is in the drawer.

const currencyUnits = {
    PENNY: 0.01,
    NICKEL: 0.05, //Weird division
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,

    getValue(name) {
        return this[name];
    },
};

function biggestValue(dueChange, cid) {
    const index = cid.findIndex(
        (item) => currencyUnits.getValue(item[0]) <= dueChange && item[1] !== 0
    );
    const currency = cid.splice(index, 1)[0];
    const valueOfCoin = currencyUnits.getValue(currency[0]);
    const numOfCoins = currency[1] / valueOfCoin;
    const timesToSum = Math.floor(dueChange / valueOfCoin);
    return timesToSum <= numOfCoins
        ? [currency[0], valueOfCoin * timesToSum]
        : [currency[0], valueOfCoin * numOfCoins];
}

function checkCashRegister(price, cash, cid) {
    const change = cash - price;
    const orderedCid = cid.reverse();
    const result = [];
    let current = 0;
    while (result.reduce((acc, item) => acc + item[1], 0) < change) {
        let usedCurrency = biggestValue(change - current, orderedCid);
        current = current + usedCurrency[1];
        result.push(usedCurrency);
    }
    return !(
        cid.reduce((acc, item) => acc + item[1], 0) ===
        result.reduce((acc, item) => acc + item[1], 0)
    )
        ? { status: "OPEN", change: result }
        : { status: "CLOSED", change: result };
}

console.log(
    checkCashRegister(97.5, 100, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
    ])
);
