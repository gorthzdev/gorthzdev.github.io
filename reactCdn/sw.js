/*service worker*/
//console.log('registrado');
const CACHE_ELEMENTS = [
    "./",
    "todas las url", // todas las url que van a hacer peticiones incluso babel y react en cdn una ruta mal hecha rompe la pwa
    "",//links de css
    ""//links de js incluido el register
]

const CACHE_NAME = "v1_cache_react";
const self = this; //xq se hace esto? //se hace referencia a un objeto windows

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then //cacheo todas las rutas 
        }).then(() => {
            self.skipWaiting() //hace el skip waiting , tiene que ver con la actualizacion del cache
        }

        ).catch(console.log) //imprime un posible error en consola, forma abreviada de usar el log que imprime x defecto lo que 
        //devuelva el catch
    )
}); //al instalarse el serviceWorker se ejecuta este listener;

self.addEventListener("activate", e => {   //evento activate
    const cacheWhiteName = [CACHE_NAME];

    e.waitUntil( //el wait until espera hasta un evento cual??
        caches.keys().then((cachesNames) => { //keys te da todas las claves en caso de qeu haya mas de un cache instalado.
            console.log(cachesNames);
            return Promise.all(cachesNames.map(cacheName => {
                return cacheWhiteName.indexOf(cacheName) === -1 && cache.delte(cacheName); //cache no existe en la lista
            })) //resuelve varias promesas al mismo tiempo
        }).then(()=> self.clients.claim())  //cuando se resuelvan las promises internas del promise all, se ejecuta clients.claim()
        //que nos va a permitir trabajar desde el cache en vez de hacer peticiones.
    )
}); //al instalarse el serviceWorker se ejecuta este listener;

//la manipulacion de cache, es importante se puede hacer desde aqui.
// con el chache lo que hay que hacer basicamente es registrar las nuevas y eliminar las versiones viejas.

self.addEventListener("fetch", e => {  //el evento fetch toma las respuestas cachedas y buscara la nueva version,
    console.log(e);
    //si la respuesta no existe se cachea
    e.respondWidth(
        caches.match(e.request).then((res)=>{ //comprueba si existe en el chache la peticion;
        console.log(res);
           if(res){
               return res  //manejo de peticiones, si existe la peticion, la hace sino , la coge desde el cache;
           }  
           
           return fetch(e.request) 
        })

    );

}); //al instalarse el serviceWorker se ejecuta este listener;