"use strict"


// "this" in case of function and arrow
function logThis(){
    console.log(this);
    // outputs window
    // this is definig the global object, it depends on the context
}
// "this" >> inside Arrow Function
const arrowFunc = () => {
    console.log(this);
    // it still points to global window object.
    // here this will be taken from it's lexical scope
};



/**
 * @object
 * normal function
 */
const item = {
  title: "Ball",
  getItem() {
    console.log("this", this);
    // points to this object
  },
  arrow: ()=>{
    console.log(this);
    // windo
  },
  functionClosure(){
    let jj = "string";
    function closures(){
        console.log(jj);
        console.log(this);
        function secondClosure(){
            console.log(this); // points to window (global object)
        }
        secondClosure();
    }
    closures()
  }
};
// item.functionClosure(); // object =>


/**
 * @Class 
 * normal function
 */
class Item {
  title = "Ball";
  getItem() { // this holds the context of Item
    let jj = "string";
    console.log(this); 
    function normal() {
        let one = jj;
       console.log(this); // "this" 😵 not reference "undefined"
    }
    const arrow = () => {
        console.log(this); // "this" 😇 will point to class
    }
    arrow(); 
  }
}

const item_ = new Item();
item_.getItem();