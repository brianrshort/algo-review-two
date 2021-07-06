function breakingRecords(scores) {
    // Write your code here
    let maxScore = -1;
    let minScore = Infinity;
    let maxCount = -1;
    let minCount = -1;
    for (var i=0; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minCount++;
        }
        if (scores[i] > maxScore) {
            maxCount++;
        }
        maxScore = Math.max(maxScore, scores[i]);
        minScore = Math.min(minScore, scores[i]);
    }
    return [ maxCount, minCount ];
}
