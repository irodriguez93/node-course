const doWorkPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        
        reject('things went south!')
        resolve([1,4,7])
    }, 2000);
})

doWorkPromise.then((result)=>{
    console.log("Success!!", result)
}).catch((error)=>{
    console.log('Error!!', error);
    
})