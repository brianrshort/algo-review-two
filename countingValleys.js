function countingValleys(steps, path) {
    // Write your code here
    let newArr = []
    let splat = path.split('');
    splat.forEach(el => {
        if (el === "D") {
            newArr.push(-1);
        } else {
            newArr.push(1);
        }
    })
        console.log(newArr);
        let valCount = 0;
        let count = 0;
        for (var i = 0; i < newArr.length; i++) {
            count += newArr[i];
            if (count === -1 ) {
                if (count + newArr[ i +1 ] === 0 ) {
                    valCount++;
                } 
            }
        }
        return valCount;
}