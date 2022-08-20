function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

/* 
  create an array from the input string
  reverse the array
  create a string from the reversed array
  return the reversed string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Create a variable that invokes a function that takes in the input as a parameter
  The invoked function will take that input, split it into an array, reverse the array, and then join it back into a string
  Compare the input string to the stored, returned reversed string and return the output of that comparison
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
