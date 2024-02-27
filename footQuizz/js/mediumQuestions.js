


let worldcup = "../assets/images-questions/worldCup.jpg";
let davidB = "../assets/images-questions/davidB.jpg";
let pele =  "../assets/images-questions/pele.jpg";
let champions ="../assets/images-questions/champions.png";
let messi1 = "../assets/images-questions/messi1.jpg";
let mUnited = "../assets/images-questions/mUnited.png";
let benzema ="../assets/images-questions/benzema.jpg";
let rivaldo ="../assets/images-questions/rivaldo.jpg";
let deco = "../assets/images-questions/deco.jpg";
let maldini = "../assets/images-questions/maldini.jpg";
let liverpool = "../assets/images-questions/liv.png";
let benf = "../assets/images-questions/benf.png";
let cr7 = "../assets/images-questions/cr7.jpg";
let raul ="../assets/images-questions/raul.jpg";
let river="../assets/images-questions/river.svg";
let dLuis ="../assets/images-questions/dL.jpg";
let  cannavaro = "../assets/images-questions/cann.jpg";
let colonia ="../assets/images-questions/col.svg";
let copaA="../assets/images-questions/ca.jpg";
let col90 = "../assets/images-questions/col90.jpg";




class Pregunta {
    constructor(noQuestion,question,imgSrc,opcion1 ,opcion2,opcion3 ,opcion4,correctAnswer){
  this.noQuestion = noQuestion;
  this.question = question ;
  this.imgSrc = imgSrc   ;
  this.opcion1 = opcion1 ;
  this.opcion2 = opcion2 ;
  this.opcion3 = opcion3 ;
  this.opcion4 = opcion4 ;
  this.correctAnswer = correctAnswer;

    }
}

/*Instanciando Objetos preguntas */

const arrayPreguntas = new Array(21);


arrayPreguntas[1] = new Pregunta(1,"Identifique al Jugador",
    rivaldo,
    "Hugo Sanchez",
    "Rivaldo",
    "Chicharito",
    "Romario",
    "Rivaldo"
    );

arrayPreguntas[2] = new Pregunta(2,
        "Identifique al Jugador",
        deco,
        "David Villa",
        "Diego Forlan",
        "Edison Cavani",
        "Deco",
        "Deco"
        );

        arrayPreguntas[3] = new Pregunta(3,
            "Maximo goleador de Brasil 2014",
            worldcup,
            "James Rodriguez",
            "Leonel Messi",
            "Muller",
            "Neimar Jr",
            "James Rodriguez" //correct
            );
            arrayPreguntas[4] = new Pregunta(4,
                "Que posicion destaco mas Paolo Maldini",
                maldini,
                "Portero",
                "Defensa Central",
                "Lateral Izquierdo",
                "Delantero",
                "Defensa Central" //correct
                );
                arrayPreguntas[5] = new Pregunta(5,
                    "En que Año ganó el Liverpool su Ultima Champions",
                    liverpool,
                    "2018",
                    "2021",
                    "2019",
                    "2016",
                    "2019" //correct
                    );
                    arrayPreguntas[6] = new Pregunta(6,
                        "Identifica al club",
                        benf,
                        "Osasuna",
                        "Al'Nasrr",
                        "Mainz 05",
                        "Benfica",
                        "Benfica" //correct
                        );
                        //
arrayPreguntas[7] = new Pregunta(7,
"Año de llegada de Cr7 al Madrid",
 cr7,
 "2008",
 "2009",
 "2010",
 "2007",
 "2009", //correct
);
arrayPreguntas[8] = new Pregunta(8,
    "Identifica al Jugador",
     raul,
     "Piqué",
     "Fernando Hierro",
     "Ozil",
     "Raul",
     "Raul" //correct
    ); 
    arrayPreguntas[9] = new Pregunta(9,
        "Record de goles en una Champions",
         champions,
         "19",
         "17",
         "12",
         "15",
         "17" //correct
        ); 
        arrayPreguntas[10] = new Pregunta(10,
            "Identifica al Club",
             river,
             "SantosFC",
             "River Plate",
             "Boca Juniors",
             "Rayo Vallecano",
             "River Plate" //correct
            ); 
            arrayPreguntas[11] = new Pregunta(11,
                "Identifica al Jugador",
                 dLuis,
                 "Pepe",
                 "David Luis",
                 "Tiago Silva",
                 "Marcelo",
                 "David Luis" //correct
                ); 
                arrayPreguntas[12] = new Pregunta(12,
                    "Con cuantos años debuto Pelé en la selección",
                     pele,
                     "15",
                     "18",
                     "17",
                     "21",
                     "17" //correct
                    ); 
                    arrayPreguntas[13] = new Pregunta(13,
                        "Identifica al Jugador",
                         cannavaro,
                         "Cannavaro",
                         "Dunga",
                         "Zico",
                         "Reus",
                         "Cannavaro"//correct
                        );
 arrayPreguntas[14] = new Pregunta(14,
                            "Identifica al Club",
                             colonia,
                             "Sevilla",
                             "Chivas",
                             "Ajax",
                             "Colonia",
                             "Colonia"//correct
                            );  
                        arrayPreguntas[15] = new Pregunta(15,
                                "Cuantas Copa America Gano Maradona",
                                 copaA,
                                 "0",
                                 "1",
                                 "2",
                                 "3",
                                 "0" //correct
                                ); 

arrayPreguntas[16] = new Pregunta(16,
"Cuantas Copa del Mundo Gano Platini",
worldcup,
"0",
"1",
"2",
"3",
"0" //correct
);                                    
arrayPreguntas[17] = new Pregunta(17,
"En que edición de Copas del Mundo brilló esta generacion",
 col90,
"1960",
"1990",
"1986",
"1994",
"1990",//correct
);   
arrayPreguntas[18] = new Pregunta(18,
    "Con cuantos años debuto Leonel Messi en el Barcelona",
     messi1,
    "18",
    "19",
    "17",
    "16.8",
    "17",//correct
    );   
    arrayPreguntas[19] = new Pregunta(19,
        "Seleccion ganadora de la Copa del Mundo de 1972",
         worldcup,
        "España",
        "Francia",
        "Italia",
        "Alemania",
        "Alemania"//correct
        );   
        arrayPreguntas[20] = new Pregunta(20,
            "Segundo Maximo Ganador de Champions League",
             champions,
            "Bayer de Munich",
            "Liverpool",
            "AC Milan",
            "Barcelona",
            "AC Milan",//correct
            );        
            arrayPreguntas[21] = new Pregunta(21,
                "En que Año en Manchester United se Llevo el Triplete",
              mUnited,
                "2001",
                "1999",
                "1995",
                "2007",
                "1999",//correct
                );                  
     
                export{arrayPreguntas,Pregunta}


