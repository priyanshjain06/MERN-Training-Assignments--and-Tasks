function countdown(number) {
    return new Promise(async (resolve) => {
        while (number >= 0) {
            console.log(number);
            number--;
            await wait(1000); 
        }
        console.log("Countdown finished!");
        resolve();  
    });
}
countdown(5).then(() => {
    console.log("Promise resolved after countdown!");
});
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
