function ShowMessage(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(
              console.log('Blaze of glory')
           )

        },Math.random() * 1000);

    })
}

function doBattle(){
    console.log('I due balttle')
}


async function MyFunction() {
    try{

      await ShowMessage();
      console.log('Me ejecuto despues del Blaze')
      doBattle();

      await ShowMessage();

      console.log('Me ejecuto despues del Blaze')
      doBattle();


      
    }catch(error){
       console.log(error)
    }
  
} 
/* pareece que el await necesita una promesa definida por obligacion //*/
/* no es obligatorio una variable para el await*/

MyFunction();