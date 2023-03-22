let name = 'John';
function printName() {
    console.log(name)
}

setTimeout(() => {
    let name = 'Peter';
    printName();
}, 1000)