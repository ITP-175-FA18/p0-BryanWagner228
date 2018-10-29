//Exercise 3 Start
console.log('Exercise 3 Start');

/*  Instructions
    Write a JavaScript program that accepts an array of integers
    and returns the largest integer in the array.

    Run the variables below through your program and output 
    the result to console.log. 
*/

let test9 = [3, 4, 5];
let test10 = [3, 5, 4];
let test11 = [324, 5436, 234];
let test12 = [-1, -2, -3];

var largest= 0;
let i = 0;



for (i=0; i<=largest;i++){
    if (test9[i]>largest) {
        var largest=test9[i];
    }
}
console.log(largest);
var largest= 0;

for (i=0; i<=largest;i++){
    if (test10[i]>largest) {
        var largest=test10[i];
    }
}
console.log(largest);
var largest= 0

for (i=0; i<=largest;i++){
    if (test11[i]>largest) {
        var largest=test11[i];
    }
}
console.log(largest);



console.log(
  Math.max(...test12)
);



