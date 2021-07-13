function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let maxPrice = -1;
    for (var i = 0; i < keyboards.length; i++) {
        for (var j = 0; j < drives.length; j++) {
            let newPrice = keyboards[i] + drives[j];
            if (newPrice <= b) {
                maxPrice = Math.max(newPrice, maxPrice);
            }
        }
    }
    return maxPrice;

}
