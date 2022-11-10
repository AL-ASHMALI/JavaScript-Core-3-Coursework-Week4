function convertToOldRoman(n) {
    let oldRoman = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    }

    let number = ""; 
    // let i; 

    for (let i in oldRoman) {
        while (n >= oldRoman[i]){
            number += i; 
            n-= oldRoman[i]; 
        }
    }
    return number;
}

module.exports = convertToOldRoman;
