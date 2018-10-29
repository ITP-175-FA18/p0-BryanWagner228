//Exercise 4 Start
console.log('Exercise 4 Start');

/*  Instructions
    Write a JavaScript program that accepts an array of strings
    and returns the largest string given. If multiple strings in
    the array have the same length, return the first one of the 
    longest length.

    Run the variables below through your program and output 
    the result to console.log. 
*/

let test13 = ['a', 'aa', 'aaa'];
let test14 = ['asdf', 'qwer', 'zxcv'];
let test15 = ['asdfasdf fdasdf a sd f', ' asdfsdf', 'asdfasdfds', 'asdfsdf', 'asdfsdaf'];
let test16 = ['ddd','dddddddd','dddd','ddddd','ddd','dd','d','d','dddddddddddd'];


function findLongestWord(array) {
  var longestWord = "";
  
  array.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });
  
  return longestWord;
}

var word = findLongestWord(test13);
console.log(word);

var word = findLongestWord(test14);
console.log(word);

var word = findLongestWord(test15);
console.log(word);

var word = findLongestWord(test16);
console.log(word);
