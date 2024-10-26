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

const getMode = (array) => {
    const counts = {};
    array.forEach(el => counts[el] = (counts[el] || 0) + 1)
    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
    return mode.join(", ")
}

const getRange = (array) => Math.max(...array) - Math.min(...array);

const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared
    }, 0) / array.length;
    return variance;
}


const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);

    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
}