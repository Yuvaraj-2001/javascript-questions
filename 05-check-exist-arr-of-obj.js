//Write a function which accepts a list of users and a name to check 

const users = [
    {id: 1, name: 'Jack', isActive: true}, 
    {id: 2, name: 'John', isActive: true}, 
    {id: 3, name: 'Mike', isActive: false}
]; // do not use for loop


// using some method
function checkExistInArr(name, arr){
    return arr.some(arr => arr.name === name);
}
console.log(checkExistInArr('Jack', users));

// using findIndex,
function checkExistInArrFindIndex(name, arr){
   const index = arr.findIndex(arr => arr.name === name);
   return index >= 0;
}