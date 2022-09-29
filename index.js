function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split('');
  const wordLength = wordArray.length;

  for (let i = 0; i < Math.round(wordLength/2); i++){
    if (wordArray[i] !== wordArray[(wordLength - 1) - i])
      return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  Convert the string into an array
  Iterate over the string array until halfway
  Compare two indices: index i that starts at 0 and index j that starts at the last index
  Index i will increment by 1
  Index j will decrement by 1
  Match element at index i with element at index j
  return false as soon as there is not a match
  Stop comparing when i = j and return true if the elements match
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
