function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}
delayedMessage("Hello, this message is delayed!", 2000); 
