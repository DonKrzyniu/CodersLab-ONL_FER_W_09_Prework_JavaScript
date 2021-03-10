const users = [["Jaydn Humphries", "Ayda Orozco"], ["Sanjeev Wilkinson", "Jorge Markham"]];

/**
 * Write your code below!
 */

let array = users;

function print2DArray(array) {
    for (let i = 0; i < array.length; i = i + 1) {
        for (let j = 0; j < array[i].length; j = j + 1) {
            console.log(array[i][j]);
        }
    }
}

print2DArray(array);

/**
 * Do NOT modify code below!
 */
module.exports = typeof print2DArray === "undefined" ? null : print2DArray;