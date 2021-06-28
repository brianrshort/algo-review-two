function plusMinus(arr) {
    // Write your code here
    let newArr = [];
    let sumPos = 0;
    let sumNeg = 0;
    let sumZero = 0;
    //console.log(arr.length)
    for (var i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        let num = arr[i];
        if (num > 0) {
            sumPos++;
            //continue;
        } else if (num < 0) {
            sumNeg++;
            //continue;
        } else if (num === 0) {
            sumZero++;
            //continue;
        }
    }
    //console.log(sumPos)
    //console.log(sumNeg)
    //console.log(sumZero)
    console.log((sumPos/(arr.length)).toFixed(6));
    console.log((sumNeg/(arr.length)).toFixed(6));
    console.log((sumZero/(arr.length)).toFixed(6));
    //console.log(newArr)
    //return newArr;
    }