// A function will be called after a certain period of time

const debounce = (func, timeout = 300) => {
    let timer;
    return (...arg) => {
        // console.log("inner fn", arg);
        // console.log(this)
        clearTimeout(timer);
        timer = setTimeout(()=>{
            console.log(this)
            func.apply(this, arg);
        }, timeout)
    }
}

const saveInput = (name) => {
    console.log("saveInput", name);
}

const processChange = debounce(saveInput, 1000);
processChange('Yuvaraj', 'hello');
processChange('Yuvaraj', 'hello');

document.addEventListener('click', ()=>{
    processChange('Yuvaraj');
});
