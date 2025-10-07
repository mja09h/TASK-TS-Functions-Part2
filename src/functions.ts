/**
 * greet(name):
 * - Accepts a "name" parameter of type "string"
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name: string): void {
  // Your code here
  console.log(`Hello ${name}`)
}

/**
 * isOdd(n):
 * - Accepts a "n" parameter of type "number"
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n: number): boolean {
  // Your code here
  let r;
  if (n % 2 == 0) {
    r = false;
  } else {
    r = true;
  }
  return r; // replace false with what you see is fit
}

/**
 * oddsSmallerThan(n):
 * - Accepts a "n" parameter of type "number"
 * - returns the number of ODD numbers smaller than "n"
 *
 * e.g.
 * oddsSmallerThan(7) -> 3; // the odd numbers being 1, 3, 5
 * oddsSmallerThan(15) -> 7; // the odd numbers being 1, 3, 5, 7, 9, 11, 13
 */
function oddsSmallerThan(n: number): number {
  // Your code here

  return Math.floor(n / 2); // replace -1 with what you see is fit
}

/**
 * squareOrDouble(n):
 * - Accepts a "n" parameter of type "number"
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32; // (16 * 2)
 * squareOrDouble(9) -> 81; // (9 ^ 2)
 */
function squareOrDouble(n: number): number {
  // Your code here
  let r;
  if (n % 2 == 1){
    r = n ** 2
  } else {
    r = n * 2
  }
  return r; // replace -1 with what you see is fit
}

export { greet, isOdd, oddsSmallerThan, squareOrDouble };
