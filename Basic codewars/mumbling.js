//ИМПЕРАТИВНЫЙ МЕТОД
// function accum(paramStr) {
//     const str = paramStr.toLowerCase();
//     let final = "";
//     for (let i = 0; i < str.length; i++) {
//         const symbol = str[i];
//         for (let j = 0; j <= i; j++) {
//             if (j === 0) {
//                 if (i !== 0) {
//                     console.log(i, j);
//                     final = final + '-';
//                 }
//                 final = final + symbol.toUpperCase();
//             } else {
//                 final = final + symbol;
//             }
//         }
//     }
//     return final;
// }
// console.log(accum('abcd'));

//REFACTOR

// function accum(paramStr) {
//     const str = paramStr.toLowerCase();
//     let final = "";
//     for (let i = 0; i < str.length; i++) {
//         const symbol = str[i];
//         for (let j = 0; j <= i; j++) {
//             if (j === 0 && i !== 0) {
//                 final += '-';
//             }
//             final += (j === 0) ? symbol.toUpperCase() : symbol;
//         }
//     }
//     return final;
// }

// console.log(accum('abcd'));

//ДЕКЛАРАТИВНЫЙ МЕТОД

// function accum(str) {
//     const result = str
//         .toLowerCase()
//         .split('')
//         .map((symbol, index) => `${symbol.toUpperCase()}${Array(index).fill(symbol).join('')}`)
//         .join('-')
//     return result;
// }

// console.log(accum('abcd'));

// const accum = (str) => str
//     .toLowerCase()
//     .split('')
//     .map((symbol, index) => `${symbol.toUpperCase()}${Array(index).fill(symbol).join('')}`)
//     .join('-')

// console.log(accum('abcd'));

const accum = (str) => str
    .toLowerCase()
    .split('')
    .map((symbol, index) => `${symbol.toUpperCase()}${symbol.repeat(index)}`)
    .join('-')

console.log(accum('abcd'));