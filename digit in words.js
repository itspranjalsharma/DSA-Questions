// Program to print the given digit in words

// JavaScript implementation of
// the above approach

// Function to return the word
// of the corresponding digit
function printValue(digit) {
    // Switch block to check for
    // each digit c
    switch (digit) {
    // For digit 0
    case "0":
        document.write("Zero ");
        break;

    // For digit 1
    case "1":
        document.write("One ");
        break;

    // For digit 2
    case "2":
        document.write("Two ");
        break;

    // For digit 3
    case "3":
        document.write("Three ");
        break;

    // For digit 4
    case "4":
        document.write("Four ");
        break;

    // For digit 5
    case "5":
        document.write("Five ");
        break;

    // For digit 6
    case "6":
        document.write("Six ");
        break;

    // For digit 7
    case "7":
        document.write("Seven ");
        break;

    // For digit 8
    case "8":
        document.write("Eight ");
        break;

    // For digit 9
    case "9":
        document.write("Nine ");
        break;
    }
}

// Function to iterate through every
// digit in the given number
function printWord(N) {
    var i,
    length = N.length;

    // Finding each digit of the number
    for (i = 0; i < length; i++) {
    // Print the digit in words
    printValue(N[i]);
    }
}

// Driver code
var N = "123";
printWord(N);

