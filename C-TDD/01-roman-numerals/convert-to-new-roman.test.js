let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  let expected = "I"; 
  let result = convertToNewRoman(1); 
  expect(result).toEqual(expected); 
  // Arrange
  // Act
  // Assert
});
