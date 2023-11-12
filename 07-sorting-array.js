
let iteration = 0;
let arr = [8,9,2,7];
arr.sort(compare);

function compare(a, b){
 console.log(`a: ${a} || b: ${b}`, ++iteration);
 return a - b;
}
console.log(arr);


// This is sort                                                     
let items = ['yuvaraj',  'abhin', 'mustafa', 'jewel'];
items.sort((a,z) => z < a ? -1 : 1);
console.log(items);                 
