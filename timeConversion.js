function timeConversion(s) {
    // Write your code here
    var splat = s.split('');
    //console.log(splat)
    
    if (splat[0] === "1" && splat[1] === "2" && splat[s.length-2] === "A") {
        splat[0] = "0";
        splat[1] = "0";
    }
    
    
    if (splat[s.length - 2] === "P" && (splat[0] + splat[1] !== "12")) {
        let first = parseInt(splat[0]) + 1;
        let second = parseInt(splat[1]) + 2;
        splat[0] = first.toString();
        splat[1] = second.toString();
    }
    splat.pop();
    splat.pop();
    var joint = splat.join("");
    //console.log(joint);
    return joint;

}