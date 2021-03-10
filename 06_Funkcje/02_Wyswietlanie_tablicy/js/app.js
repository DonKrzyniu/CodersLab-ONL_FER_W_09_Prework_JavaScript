const people = ["John", "Ive", "Donna", "Chris"];

/**
 * Write your code below!
 */

let array = people;

function printArray(array) {
    for (let i = 0; i < array.length; i = i + 1){
        console.log(array[i]);
    }
}

printArray(array);

/**
 * Do NOT modify code below!
 */
module.exports = typeof printArray === "undefined" ? null : printArray;
