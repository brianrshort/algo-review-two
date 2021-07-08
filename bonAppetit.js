function bonAppetit(bill, k, b) {
    // Write your code here
    const reduced = bill.reduce((a, b) => {
        return a + b;
    });
    const minus = reduced - bill[k];
    if (minus / 2 === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - (minus/2));
    }
}