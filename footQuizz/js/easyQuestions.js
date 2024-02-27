


let worldcup = "../assets/images-questions/worldCup.jpg";
let davidB = "../assets/images-questions/davidB.jpg";
let pele =  "../assets/images-questions/pele.jpg";
let champions ="../assets/images-questions/champions.png";
let messi1 = "../assets/images-questions/messi1.jpg";
let mUnited = "../assets/images-questions/mUnited.png";
let atm = "../assets/images-questions/atm.png";
let zidane ="../assets/images-questions/zidane.jpg";
let casillas ="../assets/images-questions/casillas.jpg";
let mbappe ="../assets/images-questions/mbappe.jpg";
let benzema ="../assets/images-questions/benzema.jpg";
let cebolla ="../assets/images-questions/cebolla.jpg";



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


arrayPreguntas[1] = new Pregunta(1,"Cual es la seleccion que mas copas del mundo ha ganado",
    worldcup,
    "Alemania",
    "Francia",
    "Brasil",
    "Argentina",
    "Brasil"
    );

arrayPreguntas[2] = new Pregunta(2,
        "Cual es maximo goleador de la Champions League historicamente",
        champions,
        "Robert Levandoski",
        "Ronaldo Nazario",
        "Cristiano Ronaldo",
        "Leo Messi",
        "Cristiano Ronaldo"
        );

        arrayPreguntas[3] = new Pregunta(3,
            "En que seleccion Jugo David Bekham",
            davidB,
            "Gales",
            "Inglaterra",
            "Irlanda",
            "Bélgica",
            "Inglaterra"
            );
            arrayPreguntas[4] = new Pregunta(4,
                "Que seleccion gano la copa del Mundo de 2002",
                worldcup,
                "Francia",
                "Alemania",
                "Brasil",
                "Italia",
                "Brasil" //correct
                );
                arrayPreguntas[5] = new Pregunta(5,
                    "En que club debuto Pele como profesional",
                    pele,
                    "Santos FC",
                    "Flamengo",
                    "River Plate",
                    "America",
                    "Santos FC" //correct
                    );
                    arrayPreguntas[6] = new Pregunta(6,
                        "En cual de estos clubes jugó Messi",
                        messi1,
                        "AC Milan",
                        "Boca Juniors",
                        "PSG",
                        "Bayer de Munich",
                        "PSG" //correct
                        );
arrayPreguntas[7] = new Pregunta(7,
"En que año ganó el Manchester United su Ultima Champions",
 mUnited,
 "2012",
 "2005",
 "2010",
 "2008",
 "2008" //correct
);
arrayPreguntas[8] = new Pregunta(8,
    "Que selección fue el campeona en el  Mundial de 2014",
     worldcup,
     "Holanda",
     "España",
     "Alemania",
     "Cuba",
     "Alemania" //correct
    ); 
    arrayPreguntas[9] = new Pregunta(9,
        "Cual de estos equipos tiene mas Champions League ganadas",
         champions,
         "Real Madrid",
         "Ajax",
         "Barcelona",
         "AC Milan",
         "Real Madrid" //correct
        ); 
        arrayPreguntas[10] = new Pregunta(10,
            "Identifica al Club",
             atm,
             "SantosFC",
             "Atletico de Madrid",
             "Juventus",
             "Levante",
             "Atletico de Madrid" //correct
            ); 
            arrayPreguntas[11] = new Pregunta(11,
                "Cual de estas selecciones no ha ganado una Copa del Mundo",
                 worldcup,
                 "Francia",
                 "Inglaterra",
                 "Paises Bajos",
                 "Uruguay",
                 "Paises Bajos" //correct
                ); 
                arrayPreguntas[12] = new Pregunta(12,
                    "Cuantas Copa del Mundo gano Pelé",
                     pele,
                     "1",
                     "2",
                     "3",
                     "4",
                     "3" //correct
                    ); 
                    arrayPreguntas[13] = new Pregunta(13,
                        "Identifica al Jugador",
                         zidane,
                         "Karim Benzema",
                         "Luka Modric",
                         "Raul Gonzales",
                         "Zinedine Zidane",
                         "Zinedine Zidane" //correct
                        );
                        arrayPreguntas[14] = new Pregunta(14,
                            "Identifica al Jugador",
                             casillas,
                             "Claudio Bravo",
                             "Casillas",
                             "Sergio Ramos",
                             "Iniesta",
                             "Casillas" //correct
                            );  
                        arrayPreguntas[15] = new Pregunta(15,
                                "En que año gano Maradona la Copa del Mundo",
                                 worldcup,
                                 "1986",
                                 "1972",
                                 "1968",
                                 "1988",
                                 "1986" //correct
                                ); 

arrayPreguntas[16] = new Pregunta(16,
"Cuantas finales del Mundo ha jugado Killian Mbappé",
mbappe,
"0",
"1",
"2",
"3",
"2" //correct
);                                    
arrayPreguntas[17] = new Pregunta(17,
"Máximo goleador de Copas del Mundo",
 worldcup,
"Killian Mbappé",
"Klose",
"Ronaldo",
"Pelé",
"Klose",//correct
);   
arrayPreguntas[18] = new Pregunta(18,
    "Famoso exjugador del Manchester United",
     mUnited,
    "Kaka",
    "Robinho",
    "Rooney",
    "Buffon",
    "Rooney",//correct
    );   
    arrayPreguntas[19] = new Pregunta(19,
        "Seleccion ganadora de la Copa del Mundo de 2010",
         worldcup,
        "España",
        "Francia",
        "Italia",
        "Alemania",
        "España",//correct
        );   
        arrayPreguntas[20] = new Pregunta(20,
            "Identifique al Jugador",
             benzema,
            "Luis Figo",
            "Benzema",
            "Piqué",
            "Xavi Alonso",
            "Benzema",//correct
            );        
            arrayPreguntas[21] = new Pregunta(21,
                "Seleccion del Cebolla Rodríguez",
                 cebolla,
                "Colombia",
                "Paraguay",
                "Costa Rica",
                "Uruguay",
                "Uruguay",//correct
                );                  
     
                export{arrayPreguntas,Pregunta} 


