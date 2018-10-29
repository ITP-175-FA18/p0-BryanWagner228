//Exercise 5 Start
console.log('Exercise 5 Start');

/*  Instructions
    Write a JavaScript program that takes an object and 
    returns the keys and values as separate arrays.

    For example: test17 would return
    ['key1', 'key2', 'key3']
    and ['val1', 'val2', val3']
    
    Run the variables below through your program and output 
    the result to console.log. 
*/

let test17 = {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3'
}
let test18 = new Date('2018-02-17T06:24:00');
let test19 = Math;


var data1 = Object.keys(test17); var data2 = Object.values(test17);
console.log(data1, data2);

var data1 = Object.keys(test18); var data2 = Object.values(test18);
console.log(data1, data2);

var data1 = Object.keys(test19); var data2 = Object.values(test19);
console.log(data1, data2);

//Just couldn't figure this on out