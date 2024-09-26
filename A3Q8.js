function randomDelayMessage(message) {
    return new Promise((resolve) => {
        const randomDelay = Math.floor(Math.random() * 5000) + 1000;  
        setTimeout(() => {
            console.log(message);
            resolve();  
        }, randomDelay);
    });
}
randomDelayMessage("This message is logged after a random delay!");
