function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    for (var i = 0; i < s.length; i++) {
        let sliced = s.slice(i, i + m);
        console.log(sliced);
        if (sliced !== []) {
            let reduced = sliced.reduce((a, b) => {
                return a + b;
            });
            if (reduced === d) {
            count++;
        }
        }
        
        
    }
    return count;
}