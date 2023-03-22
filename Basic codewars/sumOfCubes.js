const sumCubes = (number) => Array(number)
    .fill(null)
    .reduce((acc, _, index) => acc + (index + 1) ** 3, 0)
console.log(sumCubes(3));