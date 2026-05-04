// ==========================================
// Program A: Syntax Error Correction
// ==========================================
// Issue: Missing closing quote and parenthesis.
// Fix: Added the missing string delimiter and closing parenthesis.
console.log("Welcome to the bootcamp");

// ==========================================
// Program B: Runtime Error Correction
// ==========================================
// Issue: The array contains a string, causing "NaN" (Not a Number) during arithmetic execution.
// Fix: Added a type check to ensure we only multiply actual numbers.
let numbers = [2, 4, "eight"];

for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log("Skipping non-numeric element:", numbers[i]);
  }
}

// ==========================================
// Program C: Logic Error Correction
// ==========================================
// Issue: The boolean return values were inverted inside the prime number checking loop.
// Fix: Swapped return values so that it returns false when divisible, and true when it completes testing.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Not a prime number
    }
  }
  return true; // Is a prime number
}

console.log(isPrime(7)); // Output: true