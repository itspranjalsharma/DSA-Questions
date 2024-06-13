function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  // Check if prime is or not
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

isPrime(18) ? console.log("true") : console.log("false");
