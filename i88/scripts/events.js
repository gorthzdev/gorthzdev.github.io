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
            dialogue: ['Oh!!! Como has llegado hasta aqui simple campesino', 'soy Helena Guerrera guardiana del Puente, toma este balsamo y cura tus heridas'],
            reward: ()=>{
                this.player.life = this.player.life + 250;
                if(this.player.stats.baselife < this.player.life){ this.player.life = this.player.stats.baselife} //no sobrevida
            },
            actDialog: ()=>{
            
                setTimeout(() => {
                    this.set_text(this.eventHelena.dialogue[1]);
                }, 4000); 
                   this.set_text(this.eventHelena.dialogue[0]);
                   
            },
            /*
            selectDialog: ()=>{
                if (this.player.className === 'granjero'){ this.eventHelena.dialogue = ['Oh!!! Como has llegado hasta aqui simple campesino', 'soy Helena Guerrera guardiana del Puente, toma este balsamo y cura tus heridas']}
                 if (this.player.className === 'rogue'){ this.eventHelena.dialogue = ['Mi instinto me dice que tu mascara no oculta el rostro de un bandido', 'soy Helena Guerrera guardiana del Puente, toma este balsamo y cura tus heridas']}
                  if (this.player.className === 'slasher'){ this.eventHelena.dialogue = ['No se quien seas pero toda ayuda nos vendra bien', 'soy Helena Guerrera guardiana del Puente, toma este balsamo y cura tus heridas']}
                    if (this.player.className === 'veteran'){ this.eventHelena.dialogue = ['Maestro sabia que no te quedarias atras, todavia arde en ti el espiritu de lucha', 'Toma este balsamo y cura tus heridas']}

            }
                    */
        }
        //.....
         this.eventHelena_final_battle = {
            name : 'Helena',
            active: true,
            image : 'img-characters/helena.gif',
            dialogue: ['Es hora de la batalla final, has llegado hasta aqui, parece que es tu destino derrotarlo', 'Es hora de que uses una armadura digna de un guerrero !Ya no eres un campesino'],
            reward: ()=>{
                this.player.life = this.player.stats.baselife;
                this.player.energy = this.player.base_energy;
            },
            actDialog: ()=>{
            
                setTimeout(() => {
                    this.set_text(this.eventHelena_final_battle.dialogue[1]);
                }, 3500); 
                   this.set_text(this.eventHelena_final_battle.dialogue[0]);
                   
            }
        }
    }

    

    loadEvent(event) {
        console.log('Entre al evento')
    
        //manejar el timepo de apagado
        this.dialogueModule.style.display = "grid";
        this.dialogueName.textContent = event.name;
        this.dialogueAnother.innerHTML =`<img src="${event.image}"  alt='helena' width='60%' height='80%'  >`
        this.dialogueChar.innerHTML = `<img src="${this.player.animations.iddle}"  alt='helena' width='60%' height='80%'  >`
        console.log(event)
        
       
        event.actDialog()
         event.reward()

        //quitar//
        setTimeout(()=>{
            this.dialogueModule.style.display = "none"
           
           // this.afterLoad(function_bg);
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
