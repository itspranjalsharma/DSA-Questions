function reverseFunction(num) {
  let digits = Array.from(String(num), Number);
  let reversedArray = digits.reduce((acc, digit) => [digit, ...acc], []);
  return parseInt(reversedArray.join(""));
}

let num = 123456789;
let reverseFunction = reverseFunction(num);

console.log(reverseFunction);

function reverseFunction(num) {
  let numStr = num.toString();
  let reversedStr = "";
  for (let i = numStr.length - 1; i >= 0; i--) {
    reversedStr += numStr[i];
  }
  return parseInt(reversedStr);
}

let num1 = 987654321;
let reversedNum = reverseFunction(num);

console.log(reversedNum);
