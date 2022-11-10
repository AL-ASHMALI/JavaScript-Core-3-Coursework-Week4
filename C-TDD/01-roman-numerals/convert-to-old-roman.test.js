let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  let number = 1; 
  let expected = "I"; 
  let result = convertToOldRoman(number); 
  expect(result).toEqual(expected);
  // Arrange
  // Act
  // Assert
});
