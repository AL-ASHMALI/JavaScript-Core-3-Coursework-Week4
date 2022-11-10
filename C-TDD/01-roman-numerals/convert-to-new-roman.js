function convertToNewRoman(n) {

    const newRoman = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      60: "LX",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M"
    };

    let number = ""; 

    // an array of the object's values instead of the properties
    const newRomanKeys = Object.keys(newRoman).reverse(); 

    newRomanKeys.forEach((key) => {
        while (key <= n) {
              number += newRoman[key];
              n -= key;
        }
    }); 
    return number;

};




module.exports = convertToNewRoman;
