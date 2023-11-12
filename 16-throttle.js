// A function will call immediatly but cancels previous one

const throttle = (func, timeout = 300) => {
    let iswait = false;
    return (...arg) => {
        if(!iswait){
            func.apply(this, arg);
            iswait = true;
            setTimeout(()=>{
                iswait = false;
            }, timeout);
        }
    }
}

const saveInput = (name) => {
    console.log("saveInput", name);
}

const processChange = throttle(saveInput, 1000);
processChange('Yuvaraj');

document.addEventListener('click', ()=>{
    console.log('true')
    processChange('Yuvaraj');
});
