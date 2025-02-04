//1 check if number is odd or even 
function isEvenOrOdd(number) {
    return number % 2 == 0 ? "Even" : "Odd"
}
// console.log(isEvenOrOdd(4));

//2 reverse string without using .reverse method 
function reverseString(text) {
    let result = ''
    let arrOfChar = text.split('');

    for (let i = arrOfChar.length - 1; i >= 0; i--)
        result += arrOfChar[i];

    return result;
}
// console.log(reverseString("hello"))

//3 find max number in array
function FindMaxNumberInArray(arr) {
    if (arr.length == 0)
        return "array is empty!"
    return Math.max(...arr);
}
// console.log(FindMaxNumberInArray([1,2,3,4]));

//4 find smaller number in array
function FindSmallNumberInArray(arr) {
    if (arr.length == 0)
        return "array is empty!"
    return Math.min(...arr);
}
// console.log(FindSmallNumberInArray([1,2,3,4]));

//5 check if a string is a palindrome. 
function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}
// console.log(isPalindrome("ahmha"));

//6 Count the number of vowels in a string.
function countOfVowelsInString(str) {
    let count = 0;
    let vowels = "aoeiu"
    for (const char of str)
        if (vowels.includes(char))
            count++;

    return count;
}
// console.log(countOfVowelsInString("mohamed"))

//7 Remove duplicates from an array.
function removeDublicatedFromArray(arr) {
    return Array.from(new Set(arr))
}

// console.log(removeDublicatedFromArray([1,1,1,1,1,2,3,5,3]))

//8 Sort an array of numbers in ascending order.
function SortArray(arr) {
    return arr.sort((a, b) => a - b);
}
// console.log(SortArray([1, 75, 43, 12, 78, 9, 3, 2]));

//9 Sort an array of numbers in descending order.
function SortArrayDesc(arr) {
    return arr.sort((a, b) => b - a);
}
// console.log(SortArrayDesc([1, 75, 43, 12, 78, 9, 3, 2]));

//10 Find the sum of all numbers in an array.
function SumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}
// console.log(SumArray([1,2,3]));

//11 Find the factorial of a given number.
function factorial(number) {
    if (number == 1)
        return 1;
    return number * factorial(number - 1)
}

// console.log(factorial(6));

//12 Find the Fibonacci sequence up to n numbers.
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence
}

// Example usage:
// console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//13 Swap two variables without using a third variable.
function swap(val1, val2) {
    val1 = val1 * val2;
    val2 = val1 / val2;
    val1 = val1 / val2;
    return [val1, val2]
}
// let x = 5;
// let y = 6;
// console.log(x, y);

// console.log(swap(x, y))

//14 Find the second largest number in an array.
function find2LargestNumberInArray(arr) {
    return Array.from(new Set(arr.sort((a, b) => b - a)))[1];
}
// console.log(find2LargestNumberInArray([1,2,341,1,6,7,86,24]))

//15 Find the second largest number in an array.
function find2SmallestNumberInArray(arr) {
    return Array.from(new Set(arr.sort((a, b) => a - b)))[1];
}
// console.log(find2SmallestNumberInArray([1,2,341,1,6,7,86,24]))

//16 