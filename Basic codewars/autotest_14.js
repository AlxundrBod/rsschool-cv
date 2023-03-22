var name = 'John';

var user = {
    name: "Petter",
    printMessage() {
        console.log(`Hello, ${this.name}!`);
    }
};

var printMessage = user.printMessage;
printMessage();