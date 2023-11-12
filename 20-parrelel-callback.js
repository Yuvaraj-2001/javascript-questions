const asyc1 = callback => {
    console.log('callback intialized');
    setTimeout(()=>{
        callback(1);
    }, '1000')
}

const asyc2 = callback => {
    console.log('callback intialized');
    setTimeout(()=>{
        callback(2);
    }, '2000')
}

const asyc3 = callback => {
    console.log('callback intialized');
    setTimeout(()=>{
        callback(3);
    }, '1000');
}

const asycParrallel = function(funcs, parralelSucess){
    let result = [];
    funcs.forEach(element => {
        element((callback)=>{
            result.push(callback);
            if(result.length === funcs.length){
                parralelSucess(result);
            }
        })
    });
}

asycParrallel([asyc1, asyc2, asyc3], function(result){
    console.log(result)
})
