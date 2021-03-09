const people = ["John", "Ive", "Donna", "Chris"];

/**
 * Write your code below!
 */

let array = people;

function printArray(array) {
    for (let i = 1; i < array.length; i++)
        for (let j = 1; j < array; j++) {
        console.log(array[i][j]);
    }
}

console.log(array);
printArray(array);

//Zadanie mnie pokonało :-(
/**
 * Do NOT modify code below!
 */
module.exports = typeof printArray === "undefined" ? null : printArray;
