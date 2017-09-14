function say(callback){
    console.log("say---")
    callback();
}
function print(){
    setTimeout(function(){
        console.log("hello world")
    },10000)
}

say(print);