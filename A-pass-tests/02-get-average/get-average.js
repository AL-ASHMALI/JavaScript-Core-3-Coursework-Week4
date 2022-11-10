// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    // remove the string from the array
    let filtered = numbers.filter(number => typeof number === 'number');

    // calculating the average
    let sum = 0; 
    filtered.forEach((num) => {sum += num});

    return sum / filtered.length; 
}

module.exports = average;
