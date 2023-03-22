const details = {
    name: 'John!',
}

function getMessage(message) {
    return `${message} ${this.name}`;
}

console.log(getMessage.apply(details, ['Hello']));