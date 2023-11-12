// using set
const uniqueArr = (arr) => {
    return [...new Set(arr)];
};

function uniqueArrForEach(arr){
    const results = [];
    arr.forEach((value)=>{
        if(!results.includes(value)){
            results.push(value);
        }
    });
    return results;
};

function uniqueArrReduce(arr){
    return arr.reduce((acc, el)=>{
       return acc.includes(el) ? acc : [...acc, el];
    }, []);
}

console.log(uniqueArrForEach([1,2,2,2]));
console.log(uniqueArr([1,2,2,2]));
console.log(uniqueArrReduce([1,2,2,2]));