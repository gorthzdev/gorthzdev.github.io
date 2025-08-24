/*player */

export class Player{
    constructor(name , className){
      this.playerDom = document.getElementById('player'); //playerdom

      this.name = name;
      this.className = className;
      this.life = 500;
      this.energy = 20;
      this.base_energy = 20;
      this.score = 0;
      this.skilled = null;

      /* tablero*/
      this.actual_square = 1;//init en 1 never zero
      this.x_cords = 0;
      this.y_cords = 0;
      this.canWalk = true;

      this.inventory = [];

      this.equipment = {
         helmet : null , //esperan almacenar objetos
         chest : null ,
         weapon : null 
       }
      
       /*atributos*/
       this.stats = {
         strenght : 5,
         damage : 100,
         critical : 0 ,
         stamina : 0,
         baselife : 500,
         armor : 0 ,
         dodge : 5 ,
       }

       this.granjero_animations={
               caminando : "img-characters/hero.gif",
               caminando_left : "img-characters/hero_left.gif",
               caminando_right : "img-characters/hero_right.gif",
               caminando_up : "img-characters/hero_up.gif",
               iddle : "img-characters/hero_iddle.gif",
               battle : "img-characters/hero_battle.gif",
               hero_form : "img-characters/hero_forme.gif"
       }
      
      this.rogue_animations = {
               caminando : "img-characters/rogue.gif",
               caminando_left : "img-characters/rogue_left.gif",
               caminando_right : "img-characters/rogue_right.gif",
               caminando_up : "img-characters/rogue_up.gif",
               iddle : "img-characters/rogue_iddle.gif",
               battle : "img-characters/rogue_battle.gif",
               hero_form : "img-characters/hero_forme.gif"
       }

      this.slasher_animations = {
               caminando : "img-characters/slasher.gif",
               caminando_left : "img-characters/slasher_left.gif",
               caminando_right : "img-characters/slasher_right.gif",
               caminando_up : "img-characters/slasher.gif",
               iddle : "img-characters/slasher_iddle.gif",
               battle : "img-characters/slasher_battle.gif",
               hero_form : "img-characters/hero_forme.gif"
      }
       this.veteran_animations = {
               caminando : "img-characters/veteran.gif",
               caminando_left : "img-characters/veteran_left.gif",
               caminando_right : "img-characters/veteran_right.gif",
               caminando_up : "img-characters/veteran.gif",
               iddle : "img-characters/veteran_iddle.gif",
               battle : "img-characters/veteran_battle.gif",
               hero_form : "img-characters/hero_forme.gif"
      }

       this.animations = {};
    }//end constructor

    // arrowfunction del stat , su hoisting
    equipStatTacker(stat){
      let equip = this.equipment;
      //inicializados a null comprueba si existe
      let totalStat = ( equip.helmet? equip.helmet[stat] : 0 ) + (equip.chest? equip.chest[stat]: 0) + (equip.weapon? equip.weapon[stat]: 0)
      return totalStat
    }

    // toma al array stats para actualizar
    act_stats(){
      this.stats.strenght = this.equipStatTacker('strenght');   
      this.stats.damage = this.equipment.weapon.damage + this.stats.strenght * 2 + 100; //10 BASE DAMAGE
      this.stats.critical = this.equipStatTacker('critical');
      this.stats.stamina = this.equipStatTacker('stamina');
      this.stats.baselife = 500 + this.stats.stamina * 2;
      this.stats.armor = this.equipStatTacker('armor');
      this.stats.dodge = this.equipStatTacker('dodge');
    }
    
    equipItem(item){
      if(item.sloot === 3){
        this.equipment.weapon = item;
         return this.act_stats();
       
      }
    }

    setAnimations(){
      if(this.className === 'rogue'){
        this.animations = this.rogue_animations
      }

      if(this.className === 'granjero'){
        this.animations = this.granjero_animations
      }

      if(this.className === 'slasher'){
        this.animations = this.slasher_animations
      }

       if(this.className === 'veteran'){
        this.animations = this.veteran_animations
      }
    }

  setClassStats(){
    if(this.className === 'rogue'){
       this.stats.dodge += 10;
       this.skilled = 'sword'
      }

      if(this.className === 'granjero'){
        this.life += 50;
        this.stats.baselife += 50;
        this.energy = 30;
        this.base_energy = 30;
        this.skilled = 'axe'
      }

      if(this.className === 'slasher'){
        this.stats.critical = 15;
        this.skilled = 'daga'
      }
      if(this.className === 'veteran'){
        this.stats.critical = 15;
        this.skilled = 'sword'
        
      }
  }

  changePlayerAnimation(animacion) {
    this.playerDom.innerHTML = ` <img src="${animacion}" alt="img" class="character_imgs">`
}
}