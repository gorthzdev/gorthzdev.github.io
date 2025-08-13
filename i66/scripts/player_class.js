/*player */

export class Player{
    constructor(name){
      this.name = name;
      this.life = 500;
      this.alive = true;

      /* tablero*/
      this.actual_square = 0;
      this.x_cords = 0;
      this.y_cords = 0;
      this.canWalk = true;

      this.score = 0;

      /*futures atributes*/
      this.energy = 20;

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
       this.animations = {
        caminando : "img-characters/hero.gif",
        iddle : "img-characters/hero_iddle.gif",
        battle : "img-characters/hero_molesto.gif",
       }
    }

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
      this.dodge = this.equipStatTacker('dodge');
    }
    equipItem(item){
      if(item.sloot === 3){
        this.equipment.weapon = item;
        this.act_stats();
      }
    }
}