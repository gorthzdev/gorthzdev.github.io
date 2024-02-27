import {arrayPreguntas, Pregunta } from './easyQuestions.js';

document.addEventListener("DOMContentLoaded",function(){

/*CODIGO DE EJECUCION DEL PROGRAMA*/
//SCIPT 2
    /*Variables del DOM*/

    let question = document.getElementById("question");
    let opcion1 = document.getElementById("option1");
    let opcion2 = document.getElementById("option2");
    let opcion3 = document.getElementById("option3");
    let opcion4 = document.getElementById("option4");
    let nQT = document.getElementById("num-question");
    let imgSrc =  document.getElementById("img-info");
    let final = document.getElementById("final");
    let qN = parseInt( nQT.textContent);
    let optionColor ="rgba(34, 31, 30, 0.589)";
    let trueAnswer ;
   
    
function cargarInfo(xt){

    if(parseInt(xt) === parseInt(arrayPreguntas[parseInt(xt)].noQuestion)){
        opcion1.textContent = arrayPreguntas[parseInt(xt)].opcion1;
        opcion2.textContent = arrayPreguntas[parseInt(xt)].opcion2;
        opcion3.textContent = arrayPreguntas[parseInt(xt)].opcion3;
        opcion4.textContent = arrayPreguntas[parseInt(xt)].opcion4;
        imgSrc.src = arrayPreguntas[parseInt(xt)].imgSrc;
        trueAnswer = arrayPreguntas[parseInt(xt)].correctAnswer;
        question.textContent=arrayPreguntas[parseInt(xt)].question;
    }
}
//funcion de score
function IncreaseScore(){
    let scoreTab = document.getElementById("score");
    let score = parseInt(scoreTab.textContent);
    score = parseInt(score)+50;
    scoreTab.textContent=score;
}

//estilos de Final Pantalla Negra
function finalInvoke(){
   final.style.display ="flex";
   let scoreContent = "Tu puntuación es "+ document.getElementById("score").textContent;
   final.textContent = scoreContent;
}

//EJECUCION.
//cargamos info una vez
if(qN<22){
cargarInfo(qN);
}else if (qN===22){
    finalInvoke();
  }
//opcion1
  opcion1.addEventListener("click",function(event){
    opcion1.style.backgroundColor= optionColor;

        if(opcion1.textContent===arrayPreguntas[qN].correctAnswer){
         
            IncreaseScore();
        }
            //setenado ++ a qn
        qN++;
        nQT=qN.toString();
        if(qN<22){
            cargarInfo(qN);
            }else if (qN===22){
                finalInvoke();
              }
       
    }
    );
//opcion2
opcion2.addEventListener("click",function(event){
    if(opcion2.textContent===arrayPreguntas[qN].correctAnswer){
        IncreaseScore();
    }
    /*seteando valores a qn*/
   
    qN++;
    nQT=qN.toString();
    if(qN<22){
        cargarInfo(qN);
        }else if (qN===22){
            finalInvoke();
          }
}
);
//opcion3
opcion3.addEventListener("click",function(event){
    if(opcion3.textContent===arrayPreguntas[qN].correctAnswer){
        IncreaseScore();
    }
   
    qN++;
    nQT=qN.toString();
    if(qN<22){
        cargarInfo(qN);
        }else if (qN===22){
            finalInvoke();
          }
}
);
//opcion4
opcion4.addEventListener("click",function(event){
    if(opcion4.textContent===arrayPreguntas[qN].correctAnswer){
        IncreaseScore();
    }
   
    qN++;
    nQT=qN.toString();
    if(qN<22){
        cargarInfo(qN);
        }else if (qN===22){
            finalInvoke();
          }
}
);
final.addEventListener("click",function(event){
  window.location.href ="../index.html";

});

    }
        );


    
    