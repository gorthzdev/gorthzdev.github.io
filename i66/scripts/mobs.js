/* Mobs del juego -  Enemigos*/
import { weapons } from "./weapons.js";


class EnemyMobs {
  constructor(name, life, baselife, armor, dodge, damage, critical, loot, image , special) {
    this.name = name;
    this.life = life;
    this.baselife = baselife;
    this.armor = armor;
    this.dodge = dodge;
    this.damage = damage;
    this.critical = critical;
    this.loot = loot;
    this.image = image;
    this.attack_sequence = ['normal', 'normal', 'normal', 'special'];
    this.specialrate = 30;
    this.current_atk = 0;
    this.special = special;
  }
  reiniciarAtkSequence() {
    if (this.attack_sequence.length === 0) {
      for (let i = 0; i < 4; i++) { this.attack_sequence.push((this.randint(0, 100) < this.specialrate) ? 'special' : 'normal'); }
    }
  }
  randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
//fin enemy mobs

export function easyMobs(dados) {
  switch (dados) {
    case 1: return new EnemyMobs("Zombie", 200, 200, 30, 5, 10, 5,
       [weapons.c_oxidado, weapons.c_oxidado, weapons.garfio], 'img-characters/zombie_iddle.gif','css/UI/zombie_special.png');
    
    case 2: return new EnemyMobs("Goblin", 150, 150, 40, 30, 15, 5, 
      [weapons.daga_dent, weapons.daga_dent, weapons.c_oxidado], 'img-characters/goblin_burlon.gif','css/UI/goblin_special.gif');

    case 3: return new EnemyMobs("Liquen Viviente", 250, 250, 40, 5, 15, 10,
       [weapons.mazo_liqueneano, weapons.garfio, weapons.mazo_liqueneano], 'img-characters/liken.gif','css/UI/zombie_special.png');
    
  }
}
export function middleMobs(dados) {
  switch (dados) {

    case 1: return new EnemyMobs("Guerrero Cuervo", 400, 400, 40, 10, 20, 10,
       [weapons.manodoble_br, weapons.manodoble_br, weapons.crow_lance], 'img-characters/crow_warrior.gif','css/UI/zombie_special.png');

    case 2: return new EnemyMobs("Esqueleto Brutal", 400, 400, 50, 15, 40, 10,
       [weapons.axe_br, weapons.axe_br, weapons.insc_sword], 'img-characters/brutal_skull.gif','css/UI/zombie_special.png');

    case 3: return new EnemyMobs("Esqueleto", 300, 300, 50, 10, 10, 10, 
      [weapons.guadana, weapons.guadana, weapons.manodoble_br], 'img-characters/esqueleto.gif','css/UI/zombie_special.png');
   
  }
}
// (name, life, baselife, armor, dodge, damage, critical, loot, image) 
export function liquenCorrupto(){
  return new EnemyMobs("Liquen Corrupto", 500, 500, 30, 20, 70, 10, 
    [weapons.manodoble_ray, weapons.manodoble_ray, weapons.manodoble_ray], 'img-characters/liquen_corrupto.gif','css/UI/zombie_special.png');
}

let lowenBoss = new EnemyMobs("Lowen el Incendiario ", 700, 700, 50, 20, 15, 10, [], 'img-characters/zombie_iddle.gif','css/UI/zombie_special.png'); //final Boss Mapa 1



/* 0 y .legnght random*/