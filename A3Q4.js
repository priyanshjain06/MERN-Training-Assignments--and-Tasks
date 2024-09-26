function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
wait(3000).then(() => {
    console.log("Promise resolved after 3 seconds!");
});
