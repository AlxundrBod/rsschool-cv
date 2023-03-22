const details = {
    message: 'Hello!',
}

function getMessage() {
    return this.message;
}

console.log(getMessage.call(details));