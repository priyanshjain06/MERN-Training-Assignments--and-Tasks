function countdown(number) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;
        if (number < 0) {
            clearInterval(intervalId);
            console.log("Countdown finished!");
        }
    }, 1000); 
}
countdown(5);  
