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
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1); //implementing first string letters into lookup object
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or if letter is 0 then not anagram
    if (!lookup[letter]) {
      //checks if lookup object doesnt contain letter. If doesnt contain letter return false else remove letter increment
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

//Multiple Pointers Challenge: Count unique variables challenge
//implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array
//There can be negative numbers in the array, but it will always be sorted

//arr = [-6, -2, -1, 0, 1, 4, 5, 5, 5, 5];
// function countUniqueValues(arr) {
//   let right = arr.length - 1;
//   let uniqueValues = 0;

//   while (0 <= right) {
//     if (arr[right] === arr[right - 1]) {
//       right--;
//     } else {
//       uniqueValues++;
//       right--;
//     }
//   }
//   return uniqueValues;
// }

// console.log(countUniqueValues(arr));

//another solution
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   var i = 0;
//   for (var j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }
// console.log(countUniqueValues(arr));

//SLIDING WINDOW PATTERN You take an array and based on num input, you add upp the chunk of numbers from the array index to the index + num amount to get the sum. YOu iterate all the way to the end where it is feasible to add that num amount and return the highest chunk
function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

//Write a function called sameFrequency. Given 2 positive integers, find out if the two numbers have the same frequency of digits

// function sameFrequency(int1, int2){
//   // good luck. Add any arguments you deem necessary.
//   //int1 Int2

//   let mapLookup = {}

//   let integer1 = Math.abs(int1).toString()
//   let integer2 = Math.abs(int2).toString()

//   if(integer1.length !== integer2.length) {
//       return false
//   }

//   for(let i=0; i<integer1.length; i++) {
//       let character = integer1[i]
//       mapLookup[character] ? (mapLookup[character] += 1) : (mapLookup[character] = 1)
//   }

//   for(let i=0; i<integer2.length; i++) {
//       let character = integer2[i]
//       if(!mapLookup[character]) {
//           return false
//       } else{
//           mapLookup[character] -= 1
//       }

//   }
//   return true

// }

function areThereDuplicates() {}

function constructNote() {}

function findAllDuplicates() {}

function averagePair() {}

function isSubsequence() {}

function findPair() {}
