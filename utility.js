//                  METODI STATICI
// funzoni statiche es: Math
class Utility {

    //          FILTER
    static filter(array, func) {
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (func(element)) {
                tempArray.push(element)
            }
        }
        return tempArray;
    }

    //          MAP
    static map(array, func) {
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const newElement = func(element);
            tempArray.push(newElement);
        }
        return tempArray;
    }

    //          REDUCE
    static reduce(array, func, start) {
        let accumulator;
        let startIndex;
        if (start !== undefined) { // perche 0 da problemi 
            accumulator = start;
            startIndex = 0;
        } else {
            accumulator = array[0]
            startIndex = 1;
        }
        for (let i = 0; i < array.length; i++) {
            const current = array[i];
            accumulator = func(accumulator, current);
        }
        return accumulator;
    }

}



//          DA STAMPARE IN opp2

// const numbers = [3, 4, 5, 9];

// //          FILTER
// function isEven(element) {
//     return element % 2 === 0
// }
// console.log(Utility.filter(numbers, isEven))

// //          MAP
// function multiplyBy3(element) {
//     return element * 3;
// }
// console.log(Utility.map(numbers, multiplyBy3))

// //          REDUCE
// function sum(number1, number2) {
//     return number1 + number2
// }
// console.log(Utility.reduce(numbers,sum,0))