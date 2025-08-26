//se esperaba , ahora no se crean 66 instancias de mobs sino que se crea una variable y un mob para la pelea


// tablero almacena todas las casillas
export const board = [] //inicialmente vacio

// clase para generar nuevas casillas
class Square{
    constructor(id,event,x_cord , y_cord){
        this.id = id;
        this.event = event;
        this.x_cord = x_cord;
        this.y_cord = y_cord;
    }
}

let domSquares = document.querySelectorAll('.square'); //todas las casillas del tablero en un array
let domBoard = document.getElementById('map');
let rectDomBoard = domBoard.getBoundingClientRect() //array con coordenadas del tablero

function getXcordenades(i){
    const currentSquare = domSquares[i];
    const rectSquare = currentSquare.getBoundingClientRect();
    
    //posicion x del centro
    return  (rectSquare.left - rectDomBoard.left) + rectSquare.width / 2;
}
function getYcordenades(i){
    const currentSquare = domSquares[i];
    const rectSquare = currentSquare.getBoundingClientRect();
    
    //posicion x del centro
    return  (rectSquare.top - rectDomBoard.top) + rectSquare.height / 2;
}


//for para crear 66 instancias de casillas en el tablero
let square = null;
for(let i = 0 ; i < 66 ; i++){
    //almacena objeto en array id , event , x_cord , y_cord
    square = new Square(i + 1,'mob', getXcordenades(i) , getYcordenades(i));
    board.push(square);
}

//poner imagenes de fondo a las casillas*/


/*
console.log(domBoard)
console.log(domSquares)
console.log(board)
*/
