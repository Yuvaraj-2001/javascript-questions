// Write a function which get's an array and an element and returns an array with this element at the end.
const numbers = [1,2];
const append = (arr, el) => {
    arr.push(el);
    return arr;
}
console.log(append(numbers, 3)); // outputs [1,2,3]
console.log(numbers); // outputs [1,2,3]
// - - - - - - - BAD CODE - - - - - - - - - - - - - - - - - 

const newNumbers = [1,2];
const appendNum = (arr, el) => [...arr, el];