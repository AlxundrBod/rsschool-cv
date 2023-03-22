function sequence(n, pattern) {
    return typeof pattern === 'function'
        ? Array(n).fill(null).map(pattern)
        : Array(n).fill(pattern)
}

console.log(sequence(3, 4));

// function sequence(n, pattern) {
//     return typeof pattern === 'function'
//         ? Array(n).fill(null).map((x, idx) => pattern(x, idx))
//         : Array(n).fill(pattern)
// }