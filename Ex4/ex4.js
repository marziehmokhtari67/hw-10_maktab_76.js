let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
    });
    promise.then(alert);
    // the output is 1 because the excuter(function) that was writen after new promise excute only a resolve or
    // a reject and ignores another resolves or another rejects so it (excuter) excutes first resolve and ignore 
    // second resolve