function pageCount(n, p) {
    // Write your code here

    let count = 0;
    let front = Math.floor(p / 2);
    let back = Math.floor(n / 2 - front);
    return Math.min(front, back);

}