function foo(a, b) {
    return a * b;
}

const bar = foo.bind(null, 2);
console.log(bar(2));

