let promise = new Promise(function(myResolve, myReject){
    setTimeout(function(){myResolve("I Love You!")}, 3000);
});

promise.then(function(value){console.log(value)})