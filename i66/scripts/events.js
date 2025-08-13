export class Events {
    constructor(player) {
        this.player = player

        //dialogues UI
        this.dialogueModule = document.querySelector('.dialogues');
        this.dialogueChar = document.querySelector('.dialogues__character');
        this.dialogueAnother = document.querySelector('.dialogues__another');
        this.dialogueName = document.querySelector('.dialogues__name'); //nombre_chat
        this.dialogueText = document.querySelector('.dialogues__text'); //chat comun
        this.dialogueNext = document.querySelector('.dialogues__next'); //boton chat

     
        //helena
        this.eventHelena = {
            name : 'Helena',
            image : 'img-characters/helena.gif',
            dialogue: ['Oh!!! como has llegado hasta aqui simple campesino', 'soy Helena Guerrera maestra en la espada, toma este balsamo y cura tus heridas'],
            reward: ()=>{
                this.player.life = this.player.life + 200;
            },
            actDialog: ()=>{
            
                setTimeout(() => {
                    this.set_text(this.eventHelena.dialogue[1]);
                }, 4000); 
                   this.set_text(this.eventHelena.dialogue[0]);
                   
            }
        }
        //.....
    }

    comprobateEvents(casilla , function_bg) {
        console.log('Entro a comprobate events' , casilla);
        (casilla > 35 && casilla < 40) ?  this.loadEvent(this.eventHelena , function_bg) :  this.afterLoad(function_bg);
       
    }

    loadEvent(event,function_bg) {
        console.log('Entre al evento')
        let shutdow_diag = 0;
        //manejar el timepo de apagado
        this.dialogueModule.style.display = "grid";
        this.dialogueName.textContent = event.name;
        this.dialogueAnother.innerHTML =`<img src="${event.image}"  alt='helena' width='60%' height='80%'  >`
        this.dialogueChar.innerHTML = `<img src="${this.player.animations.iddle}"  alt='helena' width='60%' height='80%'  >`
        console.log(event)
       
        event.actDialog()
        //quitar//
        setTimeout(()=>{
            this.dialogueModule.style.display = "none"
            this.eventHelena.reward()
            this.afterLoad(function_bg);
        }, 7000);
    }
    //callback activar modulo
    afterLoad(callback){
      callback();
    }

    set_text(text){
        this.dialogueText.textContent = text;
    }

}
