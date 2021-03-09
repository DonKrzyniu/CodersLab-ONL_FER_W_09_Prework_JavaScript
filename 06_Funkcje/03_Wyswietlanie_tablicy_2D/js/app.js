const users = [["Jaydn Humphries", "Ayda Orozco"], ["Sanjeev Wilkinson", "Jorge Markham"]];

/**
 * Write your code below!
 */

let array = users;

function print2DArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }

console.log(array);
print2DArray(array);

//Na chwilę obecną nic więcej nie wymyślę.

/**
 * Do NOT modify code below!
 */
module.exports = typeof print2DArray === "undefined" ? null : print2DArray;
