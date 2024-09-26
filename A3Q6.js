function delayedLogSequence(messages, delays) {
    return new Promise(async (resolve) => {
        for (let i = 0; i < messages.length; i++) {
            console.log(messages[i]);
            await wait(delays[i]); 
        }
        resolve();  
    });
}
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
delayedLogSequence(
    ["Message 1", "Message 2", "Message 3"],
    [1000, 2000, 3000]
).then(() => {
    console.log("All messages logged with delays!");
});
