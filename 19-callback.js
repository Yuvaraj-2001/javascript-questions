const asyc = callback => {
    console.log('callback intialized');
    setTimeout(()=>{
        callback('done');
    }, '2000')
}

asyc(function(message){
    console.log('callback function says', message);
})
