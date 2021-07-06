
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    var count = 0;
    for (var i = 0; i < ar.length; i++) {
        for (var j = 0; j < ar.length; j++) {
            if (i != j) {
                if ((ar[i] + ar[j]) % k === 0) {
                    count++;
                }
            }
        }
    }
    count = count/2;
    return count;
}