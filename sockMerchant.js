function sockMerchant(n, ar) {
    // Write your code here
    let obj = {};
    let count = 0;
    for (var i = 0; i < n; i++) {
        let num = ar[i];
        if (obj[num]) {
            obj[num] += 1;
        } else {
            obj[num] = 1;
        }
    }
    console.log(obj);
    const vals = Object.values(obj);
    for (var i = 0; i < vals.length; i++) {
        while (vals[i] >= 2) {
            vals[i]-=2; 
            count++;
        }
    }
    return count;   
}