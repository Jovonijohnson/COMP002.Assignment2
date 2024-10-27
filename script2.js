// 2. Write code that prints all of the numbers from 1 to 100 with three exceptions: [1] For numbers that are divisible by 3, print “Fizz” instead of the number,  [2] for numbers that are divisible by 5, print “Buzz” instead of the number, and [3] for numbers that are divisible by both 3 and 5, print “FizzBuzz” instead of the number.
// Example output:
// 1
// 2
// Fizz
// 4
// Buzz
// ...
// 14
// FizzBuzz
// ...
for (let i = 1; i <= 100; i++) { // For loop that begins at 1 and increases by 1 until it reaches 100.
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz'); // Prints "FizzBuzz" to the console if "i" is divisible by both 3 and 5.
    } else if (i % 3 === 0) {

      console.log('Fizz'); // Outputs "Fizz" to the console when the first condition is false, but the value of "i" is still divisible by 3
    } else if (i % 5 === 0) {

      console.log('Buzz'); // Prints "Buzz" to the console if "i" is not divisible by both 3 and 5, but is divisible by 5 only.
    } else {

      console.log(i); // Outputs numerical value of "i" to the console when none of the above conditions are met
    }
}