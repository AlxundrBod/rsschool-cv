function Counter() {
    let counter = 0;

    return {
        incr() {
            counter++;
        },
        [Symbol.toPrimitive]: () => {
            return counter
        }
    }
}

console.log(Counter(1 + 1, 2));