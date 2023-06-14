const reverseString = function(str) {
      const characters = str.split("");

      // Reverse the order of the array
      const reversedCharacters = characters.reverse();

      // Join the array back into a string
      const reversedStr = reversedCharacters.join("");

      return reversedStr;

};

// Do not edit below this line
module.exports = reverseString;
