function migratoryBirds(arr) {
    // Write your code here
    let max = 0;
    let newArr = [];
    const obj = {};
    for (var i = 0; i < arr.length; i++) {
        let ind = arr[i];
        if (!obj[ind]) {
            obj[ind] = 1;
        } else {
        obj[ind] = obj[ind] + 1;
        }
        max = Math.max(max, obj[ind]);
    }
    console.log(obj);
    let maxString = max.toString();
    return Object.keys(obj).find(key => obj[key] === max);
}