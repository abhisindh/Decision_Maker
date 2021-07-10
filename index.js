if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW registration successful");
        console.log(registration);
    }).catch(error =>{
        console.log(error);
    })
}