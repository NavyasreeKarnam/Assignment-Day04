// Print odd numbers in an array
const printOddNumbers = arr => arr.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
});

printOddNumbers([1, 2, 3, 4, 5]);

// Convert all the strings to title caps in a string array
const titleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log(titleCaps(["hello", "world", "javascript"]));

// Sum of all numbers in an array
const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sumArray([1, 2, 3, 4, 5]));

// Return all the prime numbers in an array
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimeNumbers = arr => arr.filter(num => isPrime(num));

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Return all the palindromes in an array
const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

const getPalindromes = arr => arr.filter(str => isPalindrome(str));

console.log(getPalindromes(["racecar", "hello", "level", "world", "madam"]));