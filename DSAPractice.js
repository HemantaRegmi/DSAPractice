//Anagrams Challenge
//Given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

// let word1 = "hi";
// let word2 = "hi";

// function validAnagram(word1, word2) {
//   if (word1.length !== word2.length) {
//     return console.log("This is not an anagram"); //checks if string length is the same so then more detailes o(n) runtimes commence to compare characters and their respective occurences
//   }
//   wordCounter1 = {};
//   wordCounter2 = {};

//   for (let val of word1) {
//     wordCounter1[val] = (wordCounter1[val] || 0) + 1; //captures characters and their amounts in word1
//   }

//   for (let val of word2) {
//     wordCounter2[val] = (wordCounter2[val] || 0) + 1; //captures characters and their amounts in word2
//   }
//   console.log(wordCounter1);
//   console.log(wordCounter2);
//   for (let key in wordCounter1) {
//     if (!(key in wordCounter2)) return false; //checks if letter exists

//     if (!(wordCounter1[key] === wordCounter2[key])) return false; //checks if letter amount is the same
//   }
//   return true;
// }

// if (validAnagram(word1, word2)) {
//   console.log("this is an anagram");
// } else {
//   console.log("this is not an anagram");
// }

//slightly more efficient solution O(2n) compared to my initial O(3n) solution

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exitsts, increase increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or if letter is 0 then not anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
