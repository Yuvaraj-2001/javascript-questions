// Fetch function

fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>{
    console.log(res);
}).catch(res => {
    console.log(res);
});

