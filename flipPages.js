function pageCount(n, p) {
    // Write your code here
    let count = 0;
    if (0 + p < n - p) {
        count = 0 + p;
    } else {
        count = n - p;
    }
    console.log(count);
    count = Math.floor(count / 2);
    return count;
}