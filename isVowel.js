// An Program to see vowel in string

function isVowel(r) {
  r = r.toUpperCase();
  return r == "A" || r == "E" || r == "I" || r == "O" || r == "U";
}

function countOfVowel(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (isVowel(str[i]))
      // Check for vowel
      ++count;
    return count;
  }
}

var str = "pran jal";

console.log(countOfVowel(str));

// JavaScript program to count vowels in a string

// Function to check the Vowel
function isVowel(ch) {
  ch = ch.toUpperCase();
  return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
}

// Returns count of vowels in str
function countVowels(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++)
    if (isVowel(str[i]))
      // Check for vowel
      ++count;
  return count;
}

// Main Calling Function

// string object
var str = "abc de";

// Total numbers of Vowel
// console.log(countVowels(str));
// console.log("<br>");

// This code is contributed by rdtank.
