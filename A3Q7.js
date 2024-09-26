async function delayedLogSequence(messages, delays) {
    for (let i = 0; i < messages.length; i++) {
        console.log(messages[i]);
        await wait(delays[i]);  
    }
    console.log("All messages logged with delays!");
}
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
delayedLogSequence(
    ["Message 1", "Message 2", "Message 3"],
    [1000, 2000, 3000]
);
