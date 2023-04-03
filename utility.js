//                  METODI STATICI
// funzoni statiche es: Math
class Utility {

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

    static map(array, func) {

    }

    static reduce(array, func, start) {

    }

}