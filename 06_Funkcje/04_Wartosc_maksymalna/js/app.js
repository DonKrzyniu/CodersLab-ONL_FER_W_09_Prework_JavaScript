const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];

/**
 * Write your code below!
 */

let result = randomNumbers;

function maxFromArray(result){
    for (let i = 0; i < result.length; i++) {
        for (let j = i; j < result.length; j++) {
            if (result[i] < result[j]){
                return result;
            }
            console.log(result[j]);
        }
    }
}
maxFromArray(result);

//To zadanie to jednak nie mój poziom!