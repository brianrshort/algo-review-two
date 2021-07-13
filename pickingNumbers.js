function pickingNumbers(a) {
    // Write your code here
    let newArr = [];
    for (var i = 0; i < a.length; i++) {
        let num = a[i];
        let subArr = [];
        a.forEach(el => {
            if (num === el || num === el + 1) {
                subArr.push(el)
            }
        })
        //console.log(subArr);
        newArr.push(subArr.length);
    }
    //console.log(newArr);
    let max = Math.max(...newArr);
    //console.log(max);
    return max;
}