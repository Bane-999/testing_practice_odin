function analyzeArray(arr) {

    function getAverage(arr) {
        return arr.reduce((a, b) => a + b) / arr.length;
    }

    function getMin(arr) {
        return Math.min(...arr);
    }

    function getMax(arr) {
        return Math.max(...arr);
    } 

    let obj = {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length,
    };

    return obj;
}

module.exports = analyzeArray;   