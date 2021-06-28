function miniMaxSum(arr) {
    // Write your code here
    let sorted = arr.sort();
    let first = arr.slice(0, 4);
    let firstRed = first.reduce((a, b) => a + b);
    let last = arr.slice(-4);
    let lastRed = last.reduce((a, b) => a + b);
    console.log(firstRed + " " + lastRed);

}