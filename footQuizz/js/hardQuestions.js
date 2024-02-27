


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
let estefano = "../assets/images-questions/est.jpg"
let cr7 = "../assets/images-questions/cr7.jpg";
let ajax = "../assets/images-questions/ajax.png";
let ballack ="../assets/images-questions/ballack.jpg";
let cruyff = "../assets/images-questions/cruyff.jpg";
let xaviA =  "../assets/images-questions/xaviA.jpg"
let euro = "../assets/images-questions/euro.jpg"
let eusebio = "../assets/images-questions/eusebio.jpg"
let saviola = "../assets/images-questions/saviola.jpg"
let figo = "../assets/images-questions/figo.jpg"
let rma = "../assets/images-questions/madrid.png"
let rCarlos ="../assets/images-questions/rCarlos.jpg"
let maradona ="../assets/images-questions/maradona.jpg"

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


arrayPreguntas[1] = new Pregunta(1,
    "Que selección ganó la Copa del Mundo de 1994",
    worldcup,
    "Alemania",
    "Francia",
    "Brasil",
    "Argentina",
    "Brasil"
    );

arrayPreguntas[2] = new Pregunta(2,
        "Cuantos Titulos tiene Leo Messi (02/24)",
        messi1,
        "38",
        "46",
        "39",
        "44",
        "44"
        );

        arrayPreguntas[3] = new Pregunta(3,
            "Cuantas Copa del Mundo Jugo Cuba",
            worldcup,
            "0",
            "1",
            "2",
            "3",
            "1"
            );

            arrayPreguntas[4] = new Pregunta(4,
                "Cuantos Goles marcó Di Estefano en el Madrid",
                estefano,
                "282",
                "308",
                "250",
                "361",
                "308" //correct
                );
                arrayPreguntas[5] = new Pregunta(5,
                    "En que año debutó Cristiano Ronaldo como profesional",
                    cr7,
                    "2003",
                    "2001",
                    "2002",
                    "2004",
                    "2002" //correct
                    );
                    //
                    arrayPreguntas[6] = new Pregunta(6,
                        "Cuantas Champions Tiene el Ajax",
                        ajax,
                        "1",
                        "3",
                        "4",
                        "0",
                        "4" //correct
                        );

arrayPreguntas[7] = new Pregunta(7,
"Indentifica al Jugador",
 ballack,
 "Michael Ballack",
 "Owen",
 "Dinatali",
 "Enzo",
 "Michael Ballack" //correct
);
arrayPreguntas[8] = new Pregunta(8,
    "Identifica al Jugador",
     cruyff,
     "Puskas",
     "Beckenbauer",
     "Davis",
     "Cruyff",
     "Cruyff" //correct
    ); 
    arrayPreguntas[9] = new Pregunta(9,
        "Identifica al Jugador",
         xaviA,
         "Xavi Hernandez",
         "Arbeloa",
         "Xavi Alonso",
         "Pedro",
         "Xavi Alonso" //correct
        ); 

        arrayPreguntas[10] = new Pregunta(10,
            "Con que numero jugaba Eusebio",
             eusebio,
             "23",
             "16",
             "13",
             "66",
             "13" //correct
            ); 
            arrayPreguntas[11] = new Pregunta(11,
                "Cual de estas selecciones no ha ganado una Eurocopa",
                 euro,
                 "Francia",
                 "Grecia",
                 "Suiza",
                 "Portugal",
                 "Suiza"//correct
                ); 
                arrayPreguntas[12] = new Pregunta(12,
                    "Que seleccion gano la Copa del Mundo de 1982",
                     worldcup,
                     "Brasil",
                     "Argentina",
                     "Checoslovaquia",
                     "Italia",
                     "Italia" //correct
                    ); 
                    arrayPreguntas[13] = new Pregunta(13,
                        "Identifica al Jugador",
                         saviola,
                         "Raul Jimenez",
                         "Arda Turán",
                         "Saviola",
                         "Godines",
                         "Saviola" //correct
                        );
                        arrayPreguntas[14] = new Pregunta(14,
                            "Identifica al Jugador",
                             rCarlos,
                             "Romario",
                             "Roberto Carlos",
                             "Robinho",
                             "Dunga",
                             "Roberto Carlos" //correct
                            );  
                        arrayPreguntas[15] = new Pregunta(15,
                                "Que posicion Jugo Figo en el RMA",
                                 figo,
                                 "Lateral Derecho",
                                 "Lateral Izquierdo",
                                 "Delantero",
                                 "Defensa",
                                 "Centro" //correct
                                ); 

arrayPreguntas[16] = new Pregunta(16,
"Uno de ellos no pertencio al Madrid",
rma,
"Coentrao",
"Khedira",
"Boateng",
"Nacho",
"Boateng" //correct
);                                    
arrayPreguntas[17] = new Pregunta(17,
"En que Estadio recibió Brasil la goleada 7-1 en 2014",
 worldcup,
"Maracaná",
"Arena Pantanal",
"Mineiro",
"Arena Sao Paulo",
"Mineiro",//correct
);   
arrayPreguntas[18] = new Pregunta(18,
    "Cuantos goles marcó Maradona en su Carrera",
     maradona,
    "520",
    "481",
    "358",
    "680",
    "358",//correct
    );   
    arrayPreguntas[19] = new Pregunta(19,
        "Selección ganadora de la Eurocopa de 2012",
         euro,
        "España",
        "Francia",
        "Italia",
        "Alemania",
        "España",//correct
        );

        arrayPreguntas[20] = new Pregunta(20,
            "Sede del mundial de 1994",
             worldcup,
            "EEUU",
            "Mexico",
            "Brasil",
            "Reino Unido",
            "EEUU",//correct
            );        
            arrayPreguntas[21] = new Pregunta(21,
                "Frente a que equipo gano el Madrid la copa del Rey de 2012",
                 rma,
                "Sevilla",
                "Atletico de Madrid",
                "Barcelona",
                "Valencia",
                "Barcelona"//correct
                );                  
     
                export{arrayPreguntas,Pregunta}


