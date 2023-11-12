

const asyc1 = callback => {
    console.log('callback intialized');
    setTimeout(()=>{
        callback(1);
    }, '1000')
}

const promised = function(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(1);
        }, '1000')
    });
}

promised.then(resolved => {
    console.log(resolved)
})