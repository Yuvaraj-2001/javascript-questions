// Write a function which can concatenate 2 arrays

function mergeArray(arr1, arr2){
   return [...arr1, ...arr2];
}


// Concat Method
function concatArr(arr1, arr2){
    // concat method takes arrays or primitive
    // multiple arrays or primitive
    return arr1.concat(arr2);
}

const arr1 = [1, 2];
const arr2 = [3, 4];

const stored = concatArr(arr1, arr2);

console.log(stored, arr1, arr2); 
// concat doest mutate the previous array. 
