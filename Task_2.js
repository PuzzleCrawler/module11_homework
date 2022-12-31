function isPrime(num) {
    if (num > 1000) {
      return "Data is invalid, number is too large.";
    }
    // Check for 0 and 1, which are not considered prime numbers
    if (num <= 1) {
      return false;
    }
    // Check for other numbers up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(55)); 
  console.log(isPrime(113)); 
  console.log(isPrime(1)); 
  console.log(isPrime(1005)); 