"use strict";

//Input: the price of an item, the amount the client pays in cash, and a 2D array with the cash in drawer
//(cid)
//Output:
//An object of the form {status: "", change: ""} that returns:
//{status: "INSUFFICIENT-FUNDS", change: []} when the exact change can't be given.
//{status: "OPEN", change: ["currency", amount]} when giving change successfully.
//{status: "CLOSE", change: cid} when the amount of change to be given is the same as what is in the drawer.

//This object contains the value of each denomination.
const currencyUnits = {
    PENNY: 0.01,
    NICKEL: 0.05,
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

//This function looks through the cid array and returns the nested array that contains the name of
//the currency and the amount of money in said currency. The returned array is
//part of what is given to the client.
function biggestValue(dueChange, cid) {
    const index = cid.findIndex(
        (item) => currencyUnits.getValue(item[0]) <= dueChange && item[1] !== 0
    );
    if (index === -1) {
        return undefined;
    }
    const currency = cid.splice(index, 1)[0];
    const valueOfCoin = currencyUnits.getValue(currency[0]);
    const numOfCoins = currency[1] / valueOfCoin;
    const timesToSum = Math.floor(dueChange / valueOfCoin);
    return timesToSum <= numOfCoins
        ? [currency[0], valueOfCoin * timesToSum]
        : [currency[0], valueOfCoin * numOfCoins];
}

//This function prepares all the values that are used by "biggestValue". The results from said function
//are pushed into an array (result) that is eventually returned inside an object.
//Since math is weird in Javascript, we must use a workaround to make sure that our operations
//keep the decimals in the two digits.
function checkCashRegister(price, cash, cid) {
    const cashInDrawer = cid.reduce((acc, item) => acc + item[1], 0);
    const change = Math.round((cash - price) * 1000) / 1000;
    if (cashInDrawer < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (cashInDrawer === change) {
        return { status: "CLOSED", change: cid };
    } else {
        const orderedCid = [...cid].reverse();
        const result = [];
        let current = 0;
        while (current < change) {
            const usedCurrency = biggestValue(
                Math.round((change - current) * 1000) / 1000,
                orderedCid
            );
            if (usedCurrency === undefined) {
                return { status: "INSUFFICIENT_FUNDS", change: [] };
            }
            current += usedCurrency[1];
            result.push(usedCurrency);
        }
        return { status: "OPEN", change: result };
    }
}

console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
);

/*expected: {status: "CLOSED", change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ]} */

//Final thoughts:
//This is the last challenge in the Javascript certification. If you've made it this far,
//congrats!
//In my opinion the hardest part of the challenge is nailing down the logic of
//getting the math right. Make sure you understand well what you're being asked
//and plan out how you're going to solve the problem. Testing algorithms yourself
//with a piece of paper of a whiteboard can be very helpful.

//In this challenge I learned the importance of debugging (particularly, VS Code has a very
//powerful debugging mode) and that math in Javascript is weird.

//I hope to revisit this challenge in the future when I am more experienced and to find
//a more elegant solution.

//Thanks for reading, happy coding!
