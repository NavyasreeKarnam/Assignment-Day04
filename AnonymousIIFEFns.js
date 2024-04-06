// Print odd numbers in an array
const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
console.log(printOddNumbers[1,2,3,4,5]);
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);

// Convert all the strings to title caps in a string array
const titleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(titleCaps(["hello", "world", "javascript"]));

(function(arr) {
    const result = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(result);
})(["hello", "world", "javascript"]);

// Sum of all numbers in an array
const sumArray = function(arr) {
    return arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

(function(arr) {
    const sum = arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

// Return all the prime numbers in an array
const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        return isPrime(num);
    });
};

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

(function(arr) {
    const primes = arr.filter(function(num) {
        return isPrime(num);
    });
    console.log(primes);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Return all the palindromes in an array
const isPalindrome = function(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

const getPalindromes = function(arr) {
    return arr.filter(function(str) {
        return isPalindrome(str);
    });
};

console.log(getPalindromes(["racecar", "hello", "level", "world", "madam"]));

(function(arr) {
    const palindromes = arr.filter(function(str) {
        return isPalindrome(str);
    });
    console.log(palindromes);
})(["racecar", "hello", "level", "world", "madam"]);

// Return median of two sorted arrays of the same size.
const medianOfArrays = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

console.log(medianOfArrays([1, 3, 5], [2, 4, 6]));

(function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        console.log((merged[mid - 1] + merged[mid]) / 2);
    } else {
        console.log(merged[mid]);
    }
})([1, 3, 5], [2, 4, 6]);

// Remove duplicates from an array
const removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};

console.log(removeDuplicates([1, 2, 3, 4, 2, 3, 5]));

(function(arr) {
    const result = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
    console.log(result);
})([1, 2, 3, 4, 2, 3, 5]);

// Rotate an array by k times
const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));

(function(arr, k) {
    const rotations = k % arr.length;
    const rotated = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log(rotated);
})([1, 2, 3, 4, 5], 2);