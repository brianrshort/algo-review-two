function staircase(n) {
    // Write your code here
    for (var i = n - 1; i >= 0; i--) {
        var spaces = i;
        var hashes = n - i; 
        var newArr = []
        for (var j = spaces; j > 0; j--) {
            newArr.push(" ");
        }
        for (var k = hashes; k > 0; k--) {
            newArr.push("#");
        }
        var ans = newArr.join("");
        console.log(ans);
    }
}