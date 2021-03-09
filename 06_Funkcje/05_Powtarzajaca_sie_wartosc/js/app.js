const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];

/**
 * Write your code below!
 */

let array = numbers;

function indexOfRepeatedValue(array){
    let firstIndex = 0;
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] === array[j]);
            {
                firstIndex = array.indexOf(array[1]);
                break;
            }
        }
    }
    console.log(firstIndex);
    return firstIndex;
}
indexOfRepeatedValue(numbers);
