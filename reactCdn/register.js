/* register*/
if("ServiceWorker" in navigator){
    console.log("Service worker");
}
//forma 2
if(navigator.serviceWorker){
   console.log("Service worker");
   navigator.serviceWorker.register("./sw.js") //registra un sw
}