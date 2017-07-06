// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
  if (x > y) {
    return x;
  }
  else{
    return y;
  }
}
console.log(max(2, 3))

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a, b, c){
  if ((a > b) && (a > c)){
    return a;
  }
  else if((b > c) && (b > a)){
    return b;
  }
  else if((c > a) && (c > b)){
    return c;
  }
  else{
    return "something is muffed up here!"
  }
}

console.log(maxOfThree(12, 22, 11))


// 3.
// Write a function that takes a character
//(i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.
var vowels = ["a", "A", "E", "e", "I", "i", "O", "o", "u"];
function isAVowel(char){
if (vowels.includes(char)){
    return true;
  } else{
    return false;
  }
}
console.log(isAVowel("e"))

//////////extra 3

var alphabet =['A' , 'B' , 'C', 'D', 'e'];

var results = []

for(let i = 0; i < alphabet.length; i++){
  var result = alphabet[i].toUpperCase();
  results.push(result);
  console.log("result")
  }
  //
  console.log("buffer")
  console.log(alphabet)
  console.log(results)

// alphabet.map(function())
// function isVowel(char){
//   vowels.map();
//   return ((char) + "is a vowel");
// }

// function vowelTest(letter){
//   letter.toUpperCase();
//   if (
//     (letter === 'A') ||
//     (letter === 'E')) {
//     console.log('vowel:' + letter)
//   } else {
//     console.log('no vowel')
//   }
// })
//
// console.log(vowelTest());

// var VowelsMap = vowels.map(function(char){
//   if vowels.uppercase ("e" === char) {
//     console.log('vowel here')
//   } else {
//     console.log('no vowel')
//   }
//
// })
// console.log(VowelsMap);

//////>>>>>>>NEXT QUESTION 4
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2){
  return num1 + num2
}

console.log(sum(3, 2))
// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg (un, deux, tois){
  return((un + deux + tois) / 3)
}

console.log(avg(7,-1,11))


// 6.
// Write a function called `getLength`
//that takes one parameter (a string)
//and returns the length
// Then, write and example of using the function.
function getLength(aStr){
  aStr.length;
}

console.log("hello".length)

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(f, g){
  if g > f{
    return true
  } else{
    return false
  }
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  return ("hello"+" " + name);
}

console.log(greet("brett"))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
