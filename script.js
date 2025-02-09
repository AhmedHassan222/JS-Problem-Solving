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

    for (let char of str)
        if (obj[char] == 1)
            return char
}
// console.log(findFirstNonRepeating("ahmedhassan"))

//25 Find all occurrences of a character in a string.
function charsOfString(str) {
    const obj = {};
    for (let char of str.toLowerCase())
        obj[char] = (obj[char] || 0) + 1
    return obj;
}
// console.log(charsOfString("ahmedhassan"))

//26 Convert a string to title case.
function convertStringToTitleCase(str) {
    return str.split(' ').map(word => word.at(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// console.log(convertStringToTitleCase("ahmed hassan hussein abdel sayed hassan omar"))

//27 Implement a function to check if a given number is prime.
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// console.log(isPrime(29)); // true
// console.log(isPrime(30)); // false

//28 Find the greatest common divisor (GCD) of two numbers.
// function GreatestCommonDivisor(num1, num2) {
//     const arr1 = [];
//     const arr2 = [];

//     for (let i = 1; i <= num1; i++)
//         if (num1 % i === 0)
//             arr1.push(i);

//     for (let i = 1; i <= num2; i++)
//         if (num2 % i === 0)
//             arr2.push(i);


//     return Math.max(...arr1.filter(item => arr2.includes(item)));
// }
function GreatestCommonDivisor(num1, num2) {


    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
// console.log(GreatestCommonDivisor(12, 18))

//29 Find the least common multiple (LCM) of two numbers.
function leastCommonDivisor(num1, num2) {
    return (num1 * num2) / GreatestCommonDivisor(num1, num2);
}

// console.log(leastCommonDivisor(12,18))

//30 Write a function to convert a number to Roman numerals.

function numberToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";

    for (const { value, symbol } of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test cases
// console.log(numberToRoman(1987)); // Output: MCMLXXXVII
// console.log(numberToRoman(2024)); // Output: MMXXIV
// console.log(numberToRoman(3999)); // Output: MMMCMXCIX

//31 Merge two sorted arrays into one sorted array.
function mergeTwoSortedArray(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => b - a);
}


// console.log(mergeTwoSortedArray([5,3,1,12,6,8],[89,54,2,1,74]))

//32 Find the frequency of elements in an array.
function findFrequency(arr) {
    const obj = {};
    arr.forEach(element => {
        obj[element] = (obj[element] || 0) + 1;
    });
    return obj;
}
// console.log(findFrequency(["ahmed","mohamed","ahmed","sayed","sayed","samir"]))

//33 Convert an array of objects into a single object.
function convertArrayToObject(arr) {
    const result = {};
    for (const index in arr) {
        result[index] = arr[index];
    }
    return result;
}
let arr = [{ name: 'ahmed', age: 22 }, { sex: 'male' }, { xx: "mo salah", salary: 34234123 }]

// console.log(convertArrayToObject(arr))
//34 Implement a deep clone function for objects.
function deepClone(obj1, obj2) {

}

//35 Find the longest word in a string.
function longestWord(text) {
    const arrOfWords = text.split(' ');
    let theLongestWord = arrOfWords[0];

    for (let i = 1; i < arrOfWords.length; i++)
        if (theLongestWord.length < arrOfWords[i].length)
            theLongestWord = arrOfWords[i];

    return theLongestWord;
}

// console.log(longestWord("xxx x xx xxxx"))

// 36 Group elements of an array based on a given key.
function groupBy(array, key) {
    return array.reduce((acc, obj) => {
        const groupKey = obj[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(obj);
        return acc;
    }, {});
}
const data = [
    { id: 1, category: "fruit", name: "Apple" },
    { id: 2, category: "fruit", name: "Banana" },
    { id: 3, category: "vegetable", name: "Carrot" },
    { id: 4, category: "fruit", name: "Mango" },
    { id: 5, category: "vegetable", name: "Broccoli" }
];

const groupedData = groupBy(data, "category");
// console.log(groupedData);

// 37 Count occurrences of words in a string.
function countOccurencesOfWords(text) {
    const arrOfWords = text.split(' ');
    const result = {};
    for (const word of arrOfWords)
        result[word] = (result[word] || 0) + 1
    return result;
}

// console.log(countOccurencesOfWords("ahmed samy say to me that he like girls, and ahmed says to me that he doensn't love girls"))

//38 Convert an object into an array of key-value pairs.
function convertObjectToKeyValuePairArray(obj) {
    return Object.entries(obj);
}

// console.log(convertObjectToKeyValuePairArray({ name: "ahmed", age: 22 }))

//39 Convert an array of key-value pairs into an object.
function convertKeyValuePairArrayToObject(arr) {
    return Object.fromEntries(arr)
}

// console.log(convertKeyValuePairArrayToObject([["name","ahmed"],["age",22]]))

//40 Write a function to check if an object is empty.
function isEmptyObject(obj) {
    return Object.keys(obj).length == 0 ? "empty object" : "not empty object";
}
// console.log(isEmptyObject({name:"ahmed"}))

//41 Reverse words in a sentence without using .split().reverse().join().
function reverseWordsInSentence(sentence) {
    let result = '';
    let word = "";
    for (let i = 0; i < sentence.length; i++)
        if (sentence[i] !== " ") {
            word += sentence[i];
        } else {
            result = `${word} ${result}`;
            word = "";
        }

    if (word !== "")
        result = `${word} ${result}`;
    return result.trim();
}
// console.log(reverseWordsInSentence("hello world ahmed     "))


//42 Check if a string contains only digits.
function onlyDigits(text) {
    if (!text) return false;
    for (const char of text) {
        if (char < "0" || char > "9")
            return false
    }
    return true
}

// console.log(onlyDigits('1234'))
//43 Implement a function to trim extra spaces from a string.
function trimString(str) {
    return str.trim().replace(/\s+/g, " ");
}
// console.log(trimString("          ahmed     hassan      "));

//44 Convert a string to camelCase.
function camelCase(text) {
    return text.toLowerCase().split(' ').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');

}

// console.log(camelCase("AHMED hassan"))

//45 Convert a string to snake_case.
function snake_case(text) {
    return text.trim().toLowerCase().replace(/\s+/g, "_");
}
// console.log(snake_case(" AHMED hassan"))

//46 Convert a string to kebab-case.
function kebabCase(text) {
    return text.trim().toLowerCase().replace(/\s+/g, "-");
}
//  console.log(kebabCase(" AHMED hassan"))
//47 Find the longest common prefix among an array of strings.
function findLongestCommonPrefix(arr) {
    // ["flower","flow","flight"]
    let i = 0;
    const arr = [];
    while (!arr[0][i] || !arr[1][i] || !arr[2][i])
        return arr.reduce((total))
}
console.log(findLongestCommonPrefix(["flower", "flow", "flight"][1][5]))

//91 Implement a stack using an array.

class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
        this.count = 0;
    }
    push(val) {
        this.top++;
        this.arr[this.top] = val;
        this.count++;
    }

    isEmpty() {
        return this.top == -1;
    }

    pop() {
        if (this.isEmpty())
            return "stack is empty!!"
        let popedValue = this.arr[this.top];
        this.arr[this.top] = undefined;
        this.top--;
        this.count--;
        return popedValue
    }

    peek() {
        if (this.isEmpty())
            return "stack is empty"
        return this.arr[this.top];
    }

    display() {
        if (this.isEmpty())
            return "Stack is Empty!!"
        for (let i = 0; i < this.count; i++)
            console.log(this.arr[i])
    }
}
// const st = new Stack();
// st.push("ahmed");
// st.push("mohamed")
// st.display();

//92 Implement a queue using an array.
class queue {
    constructor() {
        this.front = -1;
        this.rare = -1;
        this.arr = [];
        this.count = 0;
    }
    isEmpty() {
        return this.count == 0;
    }
    enqueue(val) {
        if (this.isEmpty())
            this.front++;
        this.rare++;
        this.arr[this.rare] = val;
        this.count++;
    }
    dequeu() {
        if (this.isEmpty())
            return "queue is empty!!!";
        let dequeuedValue = this.arr[this.front];
        this.arr[this.front] = undefined;
        this.front++;
        this.count--;
        return dequeuedValue;

    }
    display() {
        if (this.isEmpty())
            return "Queue is Empty!!"
        for (let i = this.front; i <= this.rare; i++) {
            console.log(this.arr[i])

        }
    }
    size() {
        return this.count;
    }
    getFront() {
        return this.arr[this.front];
    }
}

// const q = new queue();
// q.enqueue(5)
// q.enqueue(7)
// q.enqueue(3)
// q.enqueue(15)
// q.dequeu()
// console.log(q.getFront())

// //93 Implement a function to check if a given expression has balanced parentheses.
// function isPalanced(text) {
//     // text => ((){[]]}
//     let obj = {
//         "(": ")",
//         "{": "}",
//         "[": "]"
//     }
//     if (text == '')
//         return "It's not Palanced";
//     const stack = new Stack();
//     for (let ch of text)
//         if (ch == "(" || ch == "{" || ch == "[")
//             stack.push(ch);
//         else if (ch == ")" || ch == "}" || ch == "]") {
//             if (stack.isEmpty() || ch !== obj[stack.peek()]) return "It's not Palanced"
//             stack.pop();
//         }
//     return stack.isEmpty() ? "It's Palanced" : "It's not Palanced";
// }

// // console.log(isPalanced("}{"))

// //94 Implements Linked List
// class Node {
//     constructor(_val, _next) {
//         this.value = _val;
//         this.next = _next;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.arr = [];
//         this.count = 0;
//     }
//     isEmpty() {
//         return this.count === 0;
//     }

//     add(val) {
//         let newNode = new Node();
//         if (this.isEmpty()) {
//             newNode = new Node(val, null);
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         else {
//             newNode = new Node(val, null);
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.count++;
//     }
//     remove() {
//         if (this.isEmpty())
//             return "Linked List is empty!!!";
//         const pointer = this.head;
//         for (let i = 0; i < this.count - 1; i++) {
//             pointer = pointer.next;
//         }
//         pointer.next = null;
//         this.tail = pointer;
//         this.count--;
//     }
//     display() {
//         const pointer = this.head;
//         for (let i = 0; i < this.count - 1; i++) {
//             console.log(this.pointer.value);
//             pointer = pointer.next;
//         }
//     }
// }

// const list = new LinkedList();
// list.add(5);
// list.add(3);
// list.add(23);
// list.add(9);
// list.display();