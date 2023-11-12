// find the minimum occurances of array,

let arr = [1,1,1, 3, 4, 6, 7, 8];
const minimumOcurancec = Math.min(...arr);
console.log(arr.filter(m => m === minimumOcurancec).length);