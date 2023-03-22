//Var1
// function calc(str) {
//     return str
//         .split('')
//         .map((symbol) => symbol.charCodeAt(0))
//         .join('')
//         .split('')
//         .filter((item) => +item === 7)
//         .join('')
//         .replaceAll('7', '6')
//         .split('')
//         .reduce((acc, curr) => acc + +curr, 0)
// }

// console.log(calc('ABC'));

//Var2

function calc(str) {
    return str
        .split('')
        .map((symbol) => symbol.charCodeAt(0))
        .join('')
        .split('')
        .filter((item) => +item === 7).length * 6
}

console.log(calc('ABC'));