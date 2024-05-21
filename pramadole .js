function isPalindrome(str) {
  // 1. Preprocess the string (optional)
  // This step removes non-alphanumeric characters and converts the string to lowercase
  // for case-insensitive comparison. You can comment this out if you want to consider
  // punctuation and uppercase letters.
  const processedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // 2. Check if the string is empty
  if (processedStr.length === 0) {
    return false; // Empty strings are not palindromes
  }

  // 3. Two pointer approach: Start from the beginning and end, compare characters
  let left = 0;
  let right = processedStr.length - 1;

  while (left < right) {
    if (processedStr[left] !== processedStr[right]) {
      return false; // Characters don't match, not a palindrome
    }
    left++;
    right--;
  }

  // 4. If the loop completes, all characters matched, it's a palindrome
  return true;
}

// Example usage
const str1 = "madam";
const str2 = "racecar";
const str3 = "hello";

console.log(isPalindrome(str1)); // true
console.log(isPalindrome(str2)); // true
console.log(isPalindrome(str3)); // false
