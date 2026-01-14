//Anagrams Challenge
//Given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

let word1 = "hi";
let word2 = "hi";

function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return console.log("This is not an anagram"); //checks if string length is the same so then more detailes o(n) runtimes commence to compare characters and their respective occurences
  }
  wordCounter1 = {};
  wordCounter2 = {};

  for (let val of word1) {
    wordCounter1[val] = (wordCounter1[val] || 0) + 1; //captures characters and their amounts in word1
  }

  for (let val of word2) {
    wordCounter2[val] = (wordCounter2[val] || 0) + 1; //captures characters and their amounts in word2
  }
  console.log(wordCounter1);
  console.log(wordCounter2);
  for (let key in wordCounter1) {
    if (!(key in wordCounter2)) return false; //checks if letter exists

    if (!(wordCounter1[key] === wordCounter2[key])) return false; //checks if letter amount is the same
  }
  return true;
}

if (validAnagram(word1, word2)) {
  console.log("this is an anagram");
} else {
  console.log("this is not an anagram");
}
