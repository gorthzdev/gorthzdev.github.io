document.addEventListener("DOMContentLoaded",function(){



let playButton = document.getElementById("play-button");
let radioEasy = document.getElementById("easy");
let radioNormal = document.getElementById("medium");
let radioHard = document.getElementById("hard");
let formulario = document.getElementById("dificultad");

radioEasy.addEventListener("change",function(){
if(radioEasy.checked){
    playButton.href="pages/easyLevel.html";
}}
);
radioNormal.addEventListener("change",function(){
    if(radioNormal.checked){
        playButton.href="pages/mediumLevel.html";
    }}
    );
    radioHard.addEventListener("change",function(){
        if(radioHard.checked){
            playButton.href="pages/hardLevel.html";
        }}
        );
        if(playButton.href==="none"){
            alert("Selecciona una Dificultad");
        }

}
    );