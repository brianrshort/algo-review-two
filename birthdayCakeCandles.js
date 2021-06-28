function birthdayCakeCandles(candles) {
    // Write your code here
    console.log(candles)
    let max = Math.max(...candles);
    console.log(max)
    let count = 0;
    for (var i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            count++;
        }
    }
    console.log(count)
    return count;

}