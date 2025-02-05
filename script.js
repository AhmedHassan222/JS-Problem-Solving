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


//16 Find the missing number in an array of 1 to n.
function findeMisingNumberInArray(arr) {
    let n = Math.max(...arr);
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
// console.log(findeMisingNumberInArray([1,2,3,4,6]))

//17 Find the intersection of two arrays.
function findIntersectionBetweenTwoArray(arr1, arr2) {
    return Array.from(new Set(arr1.filter(item => arr2.includes(item))));
}

// console.log(findIntersectionBetweenTwoArray([1, 5, 6, 2, 3, 4, 3], [5, 3, 9, 2, 3, 4, 3]))

//18 Find the union of two arrays.
function findUnionOfArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]
}

// console.log(findUnionOfArrays([1, 5, 6, 2, 3, 4, 3], [5, 3, 9, 2, 3, 4, 3]))

//19 Find the difference between two arrays.
function findDifferenceBetweenTwoArrays(arr1, arr2) {
    let set2 = new Set(arr2)
    return [...new Set(arr1.filter(item => !set2.has(item)))];
}
// console.log(findDifferenceBetweenTwoArrays([1, 5, 6, 2, 3, 4, 3], [5, 3, 9, 2, 3, 4, 3]))

//20 Remove falsy values from an array.
function RemoveFulsyValues(arr) {
    return arr.filter(item => Boolean(item))
}

// console.log(RemoveFulsyValues([false,0,"0",1,"ahmed",true,{},[],null, -1]))

//21 Flatten a nested array.
function flatenArray(arrOfArrays) {
    // const result = [];

    // arrOfArrays.forEach(arr => {
    //     arr.forEach(Element => {
    //         result.push(Element);
    //     });
    // });

    // return result;
    return arrOfArrays.flat();
}
// console.log(flatenArray([[1, 23, 4, 'ahmed'], [1, "a"], [2, 3]]))
//22 Check if two strings are anagrams.
function areAnagrams(str1, str2) {
    return str1.trim().toLowerCase().split('').sort().join('') === str2.trim().toLowerCase().split('').sort().join('');
}
// console.log(areAnagrams("DEahM",'ahmed'))

//23 Implement a function to generate a random string.
function generateRandomString() {
    const CHAR_SET = "ASDFJKLCSD";
    return Array.from({ length: 10 }, () => CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)]).join('');
}

// console.log(generateRandomString())
//24 Find the first non-repeating character in a string.
function findFirstNonRepeating(str) {
    // aahhmeeddhassan
    const obj = {};
    for (let char of str)
        obj[char] = (obj[char] || 0) + 1

    for(let char of str)
        if(obj[char] == 1)
            return char
}
// console.log(findFirstNonRepeating("ahmedhassan"))

//25 Find all occurrences of a character in a string.
function charsOfString(str){
    const obj = {};
    for(let char of str.toLowerCase())
        obj[char] = (obj[char] || 0) + 1
    return obj;
}
// console.log(charsOfString("ahmedhassan"))

//26 Convert a string to title case.
function convertStringToTitleCase(str){
    return str.split(' ').map(word => word.at(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// console.log(convertStringToTitleCase("ahmed hassan hussein abdel sayed hassan omar"))

//27 Implement a function to check if a given number is prime.
