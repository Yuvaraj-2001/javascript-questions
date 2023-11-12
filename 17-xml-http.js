

document.addEventListener('click', ()=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    xhr.send();
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log("success");
        }else{
            console.log("Error");
        }
    }
    
    xhr.onerror = function (){
        console.log("xhr failed Requesrt");
    }
});
