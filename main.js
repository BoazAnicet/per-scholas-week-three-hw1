/* 
Define a function, as a function expression,
maxOfThree that takes three numbers as arguments
and returns the largest of them. Again,
the Math.max method is not allowed.
*/

// const maxOfThree = (a, b, c) => {
//   let max = a;

//   if (b > max) {
//     max = b;
//   }
//   if (c > max) {
//     max = c;
//   }

//   return max;
// };

// console.log(maxOfThree(0, 1, 2)); // 2
// console.log(maxOfThree(3, 5, 2)); // 5
// console.log(maxOfThree(-143, 112233, 214)); // 112233

/*
Define a function, as a function
declaration, isCharAVowel that takes
a character as an argument and returns
true if it is a vowel, false otherwise.
*/

// const isCharAVowel = (char) => char.match(/[aeiouAEIOU]/) !== null;

// console.log(isCharAVowel("a")); // true
// console.log(isCharAVowel("b")); // false
// console.log(isCharAVowel("C")); // false
// console.log(isCharAVowel("D")); // false
// console.log(isCharAVowel("E")); // true

/*
Define a function, as a function
expression, sumArray that takes
an array of numbers and returns
the sum of those numbers. For
example, sumArray([2, 4, 5]);
would return 11.
*/

// const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// console.log(sumArray([2, 3, 4])); // 9
// console.log(sumArray([56, 100, -30])); // 126
// console.log(sumArray([255, 30, 41])); // 326
// console.log(sumArray([76, 90, 290])); // 456

/*
Define a function, as a function
declaration, multiplyArray that
takes an array of numbers and
returns the product those numbers.
For example, multiplyArray([2, 4, 5]);
would return 40.
*/

// const multiplyArray = (arr) => arr.reduce((acc, curr) => acc * curr, 1);

// function multiplyArray(arr) {
//   return arr.reduce(function (acc, curr) {
//     return acc * curr;
//   }, 1);
// }

// console.log(multiplyArray([2, 4, 5])); // 40
// console.log(multiplyArray([23958723, 0, 4377672369])); // 0
// console.log(multiplyArray([2, 2, 2, 2, 2])); // 32
// console.log(multiplyArray([1, 1, 1, 1])); // 1
// console.log(multiplyArray([1, 3, 6, 7])); // 126

/*
Define a function, as a function
expression, numArgs that returns
the number of arguments passed
to the function when called.
*/

// const numArgs = (...args) => args.length;

// console.log(numArgs(1, 2, 3, 4, 5)); // 5
// console.log(numArgs([1, 2, 3, 4])); // 1
// console.log(numArgs([1, 2], [3, 4, 5])); // 2
// console.log(numArgs([1, 2], "string", 23, { name: "Boaz" })); // 4
// console.log(numArgs()); // 0

/* Define a function, as a function
declaration, reverseString that takes
a string, reverses the characters,
and returns it. For example,
reverseString('rockstar'); would 
return the string "ratskcor".
*/

// const reverseString = (str) => str.split("").reverse().join("");

// console.log(reverseString("Hello!")); // !olleH
// console.log(reverseString("rockstar")); // ratskcor
// console.log(reverseString("love")); // evol
// console.log(reverseString("king")); // gnik
// console.log(reverseString("lol")); // lol
// console.log(reverseString("racecar")); // racecar

/*
Define a function, as a function
expression, longestStringInArray
that takes an array of strings as
an argument and returns the length
of the longest string.
*/

// const longestStringInArray = (arr) => Math.max(...arr.map((el) => el.length));

// console.log(
//   longestStringInArray([
//     "Hello world!",
//     "Good morning.",
//     "What's for breakfast?",
//   ])
// );

// console.log(
//   longestStringInArray([
//     "In heaven's name...",
//     "Why are you walking away?",
//     "Hang on to your love.",
//   ])
// );

/*
Define a function, as a function
declaration, stringsLongerThan
that takes an array of strings
and a number as arguments; and
returns an array of the strings
that are longer than the number
passed in. For example,
stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
would return ["hello", "morning"].
*/

// const stringsLongerThan = (arr, num) => arr.filter((el) => el.length > num);

// console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3)); // ["hello", "morning"]
// console.log(stringsLongerThan(["I", "want", "to", "rock", "with", "you"], 2)); // ["want", "rock", "with", "you"]
// console.log(
//   stringsLongerThan(["Don't", "stop", "'til", "you", "get", "enough"], 5)
// ); // ["enough"]
// console.log(stringsLongerThan(["Remember", "the", "time"], 3)); // ["Remeber", "time"]
