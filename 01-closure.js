function privateCounter(){
    let count = 0;
    return {
        getValue: ()=>{
          return  this;
        },
        thisValue: function(){
          return  this;
        },
        increase: () => {
          // return count++; // output 0
          return ++count; // output 1;
        }
    }
}

const closure = privateCounter();
console.log('arrow', closure.getValue());
console.log('normal function', closure.thisValue());
console.log('increase', closure.increase());

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 