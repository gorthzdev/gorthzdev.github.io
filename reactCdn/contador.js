/* contador*/
const Contador = () => {
    const [contador , setContador ] = React.useState(0);
    console.log(contador);

    //manejar lo que ejecutan los eventos
    const aumentar = ()=>{setContador(contador + 1)}
    const disminuir = ()=>{setContador(contador - 1)}

    return (
        // contador se vuelve a renderizar siempre que se haga una modificacion.
        // eventos en react
        // es JSX no html
        // se maneja el onclick con una arrow
        // estas funciones no se invocan con parentesis porque da error
        //arquitectura de manejo de estilos , no se usa class en JSX con react para no entrar en conflicto
        //con class de js , se usa className
      
        <div>
            <h1 className={contador > 0 ? "mayor" : "menor"}> {contador} : 0 </h1>
            <hr />
            <button  onClick={aumentar} >Aumentar</button>
            <button onClick={disminuir} >Disminuir</button> 
        </div>

    )
}