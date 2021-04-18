'use strict'

console.log('============Завдання 1============');

const logItems = function (array) {
    let i = 1;
    for (const element of array) {
        console.log(`${i} - ${element}`);
        i += 1;
    };
};


logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);



logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);