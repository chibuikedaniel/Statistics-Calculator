// const getMean = (array) => {
//     const sum = array.reduce((acc, el) => acc + el, 0);
//     const mean = sum / array.length;
//     return mean;
// }

// using the implicit return to get the mean
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b);

    // Check if array length is even
    const isEven = sorted.length % 2 === 0;

    if (isEven) {
        // For even-length arrays, get the two middle numbers and calculate their mean
        const firstMiddleNumber = sorted[sorted.length / 2];
        const secondMiddleNumber = sorted[(sorted.length / 2) - 1];
        return (firstMiddleNumber + secondMiddleNumber) / 2;
    } else {
        // For odd-length arrays, return the middle number
        return sorted[Math.floor(sorted.length / 2)];
    }
}


const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers)

    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
}