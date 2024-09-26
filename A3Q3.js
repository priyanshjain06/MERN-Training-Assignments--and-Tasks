function countdown(number, callback) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;

        if (number < 0) {
            clearInterval(intervalId);
            console.log("Countdown finished!");
            if (callback) {
                callback();  
            }
        }
    }, 1000);
}
countdown(5, () => {
    console.log("Callback executed after countdown!");
});
