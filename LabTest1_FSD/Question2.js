//Question 2: Promises

const resolvedPromise = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({'message':'resolved promise!'});
        }, 500);
    });
}
const rejectedPromise = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject({'error': 'rejected promise!'});
        }, 500);
    });
}

successHandler = success => console.log(success)
errorHandler = error => console.log(error)

// use outside functions
resolvedPromise().then(
    successHandler
)
rejectedPromise().catch(
    errorHandler
)