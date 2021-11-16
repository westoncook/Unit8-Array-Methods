function isEven(num) {
    return num % 2 === 0
}

function lastChar(str) {
    return str.length - 1
}

function doubleValues(arr) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i] * 2);
    }
    return array;
}

function justVowels(str) {
    const array = [];
    for (let char of str) {
        if ('aeiou'.indexOf(char) !== -1) {
            array.push(char);
        }
    }
    return array
}

function onlyEvenValues(arr) {
    const array = [];
    for (let i of arr) {
        if (isEven(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array
}

function showFirstAndLast(arr) {
    const array = []
    for (let i of arr) {
        let first = i[0];
        let last = i[lastChar(i)];
        array.push(first + last);
    }
    return array
}

function addKeyAndValue(arr, key, value) {
    const array = []
    for (let obj of arr) {
        obj[key] = value;
        array.push(obj);
    }
    return array
}

function vowelCount(str) {
    const obj = {};
    const vowelArray = justVowels(str);
    for (let char of vowelArray) {
        if (obj[char]) {
            obj[char] += 1;
        }
        else {
            obj[char] = 1;
        }
    }
    return obj
}


function doubleValuesWithMap(arr) {
    return arr.map((val) => {
        return val * 2;
    })
}

function valTimesIndex(arr) {
    return arr.map((val, index) => {
        return val * index;
    })
}

function extractKey(arr, key) {
    return arr.map((val) => {
        return val.name
    })
}

function extractFullName(arr) {
    const array = [];
    for (let obj of arr) {
        array.push(`${obj.first} ${obj.last}`);
    }
    return array
}

function filterByValue(arr, key) {
    return arr.filter((val) => {
        return val[key];
    })
}

function find(arr, searchValue) {
    for (let val of arr) {
        if (val === searchValue) {
            return val;
        };
    }
}

function findInObj(arr, key, searchValue) {
    for (let obj of arr) {
        if (obj[key] === searchValue) {
            return obj;
        }
    }
}

function removeVowels(str) {
    let newStr = '';
    for (let char of str) {
        if ('aeiouAEIOU'.indexOf(char) === -1) {
            newStr += char.toLowerCase();
        }
    }
    return newStr;
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    let odds = arr.filter((val) => {
        return val % 2 !== 0;
    })
    return odds.map((val) => {
        return val*2;
    })
    
 }
