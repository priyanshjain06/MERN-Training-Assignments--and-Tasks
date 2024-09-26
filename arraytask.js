
let arr = [2,5,7,8,10];
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        result.push(arr[i]); 
    }
}
console.log(result);
