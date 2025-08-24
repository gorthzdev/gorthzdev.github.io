/* GAME MANGER*/
import { board } from "./gen_world.js";
import { easyMobs, liquenCorrupto, middleMobs, crowMane } from "./mobs.js";
import { Player } from "./player_class.js";
import { Events } from "./events.js";
import { weapons } from "./weapons.js";

 let player = new Player('Granjero', localStorage.getItem('player_class'));
     player.setAnimations();
     player.changePlayerAnimation(player.animations.iddle); //iddle
     player.setClassStats();
     console.log(player)
     if(player.className === 'veteran'){player.equipment.weapon = weapons.veteran_dagues , player.inventory.push(weapons.veteran_dagues)}

//Gamestate
let current_enemy = null;
let inventory_current_item = null;
let liquenCorruptoAppear = randint(25, 50);
let battleActive = true;
let helenaAppear = true;

//incializaciones del DOM
const rootStyles = document.documentElement.style;
//botones de inventario
const inventory_ui = document.querySelector('.inventory')
const inventory_button = document.querySelector('.main__inventory')
const inventory_closed = document.querySelector('.inventory__closed')
const doomIventory = document.querySelectorAll('.inventory__slot')
//panel de inventario//
const itemName = document.querySelector('.inventory__item-name') //itemname
const itemUsage = document.querySelector('.inventory__item-usage')
const equipInventoryItems = document.querySelector('.inventory__use-button') //equip
//gameover
const domGameover = document.querySelector('.gameover');
const domGameoverScore = document.querySelector('.gameover_score')
const domGameoverMessage = document.querySelector('.gameover_message')
//botones de UI STATS
const stats_ui = document.querySelector('.stats');
const stats_button = document.querySelector('.main__stats');
const stats_closed = document.querySelector('.stats__closed');
const statsShow = document.getElementById('all_stats');
const statsCharacterImage = document.querySelector('.stats__character-image')

//botones de batalla
const battle_button = document.querySelector('.main__avanzar');
const attack_button = document.querySelector('.battle__normal-attack'); //boton de batalla ataque
const attack_button_special = document.querySelector('.battle__special-attack'); //boton de batalla ataque

const battle_menu = document.querySelector('.battle-menu'); //battle menu 
const battle_chat = document.querySelector('.battle-chat');   //chat de batalla
const battle_options = document.querySelector('.battle-options');  ///options
const battleplayer = document.querySelector('.battle-player'); //
const battleenemy = document.querySelector('.battle-enemy'); //
const domDefense = document.getElementById("special_2")

//enemy atacksequence
const DOmEnemy_atk_sequence = document.querySelector('.enemy_atack-sequence')
const enemy_atkSeq_Items = document.querySelectorAll('.enemy_seq')
//main
let domScore = document.getElementById('score');

//score
function actScore() {
  domScore.textContent = `Score: ${player.score}`;
}
//energy
function grantEnergy(cantidad) {
  player.energy += cantidad;
  player.energy > player.base_energy ? player.energy = player.base_energy : player.energy; //max energy
}

//listeners
equipInventoryItems.addEventListener('click', () => {
  if (inventory_current_item) {
    console.log(inventory_current_item, 'current item');
    player.equipItem(inventory_current_item);

    console.log('Equipado', inventory_current_item);
  }
})

function toggleGameOver() {
  domGameover.style.display = 'grid';
  domGameoverScore.textContent = `Score: ${player.score}`
  domGameoverMessage.textContent = `Ha sido Asesinado por un ${current_enemy.name} [ Casilla ${player.actual_square} ] `
}

battle_button.addEventListener('click', handleMovement);

inventory_button.addEventListener('click', e => {
  if (inventory_ui.style.display === 'none') {
    inventory_ui.style.display = 'grid';
    mapAllInventory(); ///>>>>>>>>> INVENTARIO MAP
  } else {
    inventory_ui.style.display = 'none';
  }
});

inventory_closed.addEventListener('click', e => {

  inventory_ui.style.display = 'none';

})

//eventos de stats
stats_button.addEventListener('click', e => {
  console.log('me ejecuto')
  stats_ui.style.display === 'none' ? stats_ui.style.display = 'grid' : stats_ui.style.display = 'none';

  statsShow.innerHTML = ` <span>Life :${player.life}/${player.stats.baselife}</span>
                          <span>Armor :${player.stats.armor}</span>
                          <span>Dodge :${player.stats.dodge} %</span>
                          <span>Damage :${player.stats.damage}</span>
                          <span>Critical :${player.stats.critical} %</span>
  `
  statsCharacterImage.innerHTML = `<img src="${player.animations.iddle}" height="100%   width="100%   "></img>`
})
//boton de cerrar stats
stats_closed.addEventListener('click', e => {
  stats_ui.style.display = 'none';
})

//funcion randint
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//randoms mob***
function randomizeMobs() {
  if (player.actual_square < 25) { return easyMobs(randint(1, 3)) }
  if (player.actual_square >= 25 && player.actual_square !== liquenCorruptoAppear && player.actual_square <= 64) { return middleMobs(randint(1, 3)) }
  if (player.actual_square === liquenCorruptoAppear) { return liquenCorrupto() }
  if (player.actual_square >= 65) { return crowMane() }
}

//Botones de Batalla//
attack_button.addEventListener('click', handleBattle);

attack_button_special.addEventListener('click', () => {  //special attack
  if (player.energy > 14) {
    handleBattle_special();//
  } else {
    attack_button_special.textContent = 'Insufiente Energia'
    setTimeout(() => {
      attack_button_special.textContent = 'Special Attack [15 E]'
    }, 2000)
  }
});
domDefense.addEventListener('click', () => {  //defense - no atack
  if (player.energy > 4) {
    handleDefense();
  } else {
    domDefense.textContent = 'Insufiente Energia'
    setTimeout(() => {
      domDefense.textContent = 'Defense [5 E]'
    }, 2000)
  }
}
)
/*maneja el movimiento*/
function handleMovement() {
  if (player.canWalk) {
    battle_button.textContent = "Avanzando....";
    let dados = randint(1, 6);
    if(player.className ==='rogue') dados += 1; //rogue
    //ganar energia
    grantEnergy(dados);
    player.score += dados * 10;
    actScore();
    //movimiento
    handleSteps(dados)
    player.canWalk = false;

  }
}
function movePlayer(rootStyles, board, actualSquare) {
  //animaciones de movimiento
  
  if (board[actualSquare + 1].x_cord > board[actualSquare].x_cord) { player.changePlayerAnimation(player.animations.caminando_right) }
  if (board[actualSquare + 1].x_cord < board[actualSquare].x_cord) { player.changePlayerAnimation(player.animations.caminando_left) }

  if (board[actualSquare + 1].y_cord > board[actualSquare].y_cord) { player.changePlayerAnimation(player.animations.caminando) }
  if (board[actualSquare + 1].y_cord < board[actualSquare].y_cord) { player.changePlayerAnimation(player.animations.caminando_up) }
  console.log(board, player.actual_square)

  console.log('Me ejecuto actualizo custom properties -function movePlayer');
  rootStyles.setProperty('--player-x-pos', `${board[actualSquare].x_cord - 60}px`); //hay que restar una distancia la coordenada 60 en variable para responsive
  rootStyles.setProperty('--player-y-pos', `${board[actualSquare].y_cord - 50}px`); //50 original
  player.actual_square++;
}

function handleSteps(steps) {
  battleActive = true;
  console.log('I do Steps')
  if (steps === 0) {
     comprobateEvents(player.actual_square , battleActive); 
        if (battleActive){return battleModuleON()}
        else{
        battle_button.textContent = "Avanzar"; // module on
        player.changePlayerAnimation(player.animations.battle)

  if (player.actual_square > 65) {
    player.changePlayerAnimation(player.animations.hero_form)
    }
     return player.canWalk = true;
    }
  };
      //para el final del juego
  setTimeout(() => {
    if (player.actual_square < 65) { movePlayer(rootStyles, board, player.actual_square) } 

    //recursividad
    steps--; //actualiza la recursividad
    handleSteps(steps);

  }, 1000)
}

//toggle menu
function toggleBattleMenu(election) {
  setTimeout(() => {
    if (election) {
      battle_menu.style.display = 'grid';
      actuallizeBattleModule(player, current_enemy);
      actSpecialUI()
    } else { battle_menu.style.display = 'none' }
  }, 2000)

}
//actulize battle enemy
function actuallizeBattleModule(player, enemy) {
  if (enemy.life < 0) { enemy.life = 0 } //para que no ponga -x en la barra de vida
  let battlecharImg = player.animations.battle;
  if (player.actual_square > 64) { battlecharImg = 'img-characters/hero_forme.gif' }

  battleplayer.innerHTML = `<div id="stat-player"> 
    <div style="width:${player.life / player.stats.baselife * 100}% ; background-color:green; height=100% ; text-align: center ; transition: width 600ms">${player.life}/${player.stats.baselife}</div>
   </div> 
   <div id="stat-player_energy"> 
    <div style="width:${player.energy / player.base_energy * 100}% ; background-color:orange; height=99% ; text-align: center ; transition: width 600ms">${player.energy}/${player.base_energy}</div>
   </div> 
   <img src="${battlecharImg}" height="80%   width="80%"></img>`

  battleenemy.innerHTML = ` <div id="stat-enemy">
    <div style="width:${enemy.life / enemy.baselife * 100}% ; background-color:green; height=99% ; text-align: center ; transition: width 600ms">${enemy.life}/${enemy.baselife}</div>
   </div>
   <div id="name-enemy">${enemy.name}</div> 
   <img src="${enemy.image}" height="80%   width="80%   "></img>`

  if (player.life <= 0) { toggleGameOver() }; //gameover funcional
}

//toggle battle
function toggleBattleChat(election) {

  if (election) {
    battle_options.style.display = 'none';
    battle_chat.textContent = "";
    battle_chat.style.display = 'grid';
  }
  else {
    battle_options.style.display = 'grid';
    battle_chat.textContent = "";
    battle_chat.style.display = 'none';
  }
}

function showBattleChatMessage(message, time) {  //mejorar
  console.log('me ejecute en ', time)
  toggleBattleChat(true)
  battle_chat.textContent = message;
  setTimeout(() => {
    toggleBattleChat(false)

  }, time)
}
                                            /*LOGICA DE BATALLA*/
function playerAtaca(enemy) {
  if(player.className === 'veteran' && player.equipment.weapon.type === 'daga'){enemy.dodge = enemy.dodge / 2} 

  if (enemy.dodge < randint(1, 100)) {
     if (player.stats.critical > randint(1, 100)) {
         enemy.life = enemy.life + enemy.armor - player.stats.damage * 2; } //agreglar 
     else {
       //normal attack
       enemy.life = enemy.life + enemy.armor - player.stats.damage; } }
  else {
    //mob esquiva
    // showBattleChatMessage('Mob Esquiva' , 1000);
  }
  actuallizeBattleModule(player, current_enemy); console.log('Actualiza module /enmey ', current_enemy)

}//fin player atk

async function enemyAtaca(enemy) {
  if (enemy.attack_sequence[enemy.current_atk] === 'special') { enemy.damage += 50;}//mob especial on

  if (player.stats.dodge < randint(1, 100)) {
    if (enemy.critical > randint(1, 100)) {player.life = player.life + player.stats.armor - enemy.damage * 2;} 
    else {
      //  showBattleChatMessage(`El ${enemy.name} te ha golpeado`, 2000)
      player.life = player.life + player.stats.armor - enemy.damage;}} 
      else {
    // showBattleChatMessage('He esquivado Monstruo' ,2000)
  }

  if (enemy.attack_sequence[enemy.current_atk] === 'special') { enemy.damage -= 50 }//mob especial quit
  actuallizeBattleModule(player, current_enemy);

}//fin enemy 

                                        //FUNCIONES DE BATALLA
function battleModuleON() {

  console.log('Battle Module Active');
  
  player.changePlayerAnimation(player.animations.battle)

  if (player.actual_square > 65) {
    player.changePlayerAnimation(player.animations.hero_form)
  }

   //UI
  toggleBattleMenu(true);
  current_enemy = randomizeMobs(); //console.log(current_enemy, 'Mob random')
}

function handleBattle() {

  if (player.equipment.weapon) armorEfects(player.equipment.weapon); //efecto de armas
  player.life > 0 ? playerAtaca(current_enemy) : toggleGameOver();//
  current_enemy.life > 0 ? enemyAtaca(current_enemy) : enemyIsDead()
  //Special Mob Handler
  manageEspecialMob(current_enemy); 
  actSpecialUI()// mob special
}

function enemyIsDead() {
  getLootedItem(current_enemy);
 
  if(player.className === 'slasher' && player.life < player.stats.baselife * 0.75){player.life += 15}  //ventaja del slasher

  player.score += current_enemy.baselife;
  actScore();//mata npc
}

function handleDefense() {
  player.energy -= 5;
  player.stats.dodge += 100
  //enemy ataca
  current_enemy.life > 0 ? enemyAtaca(current_enemy) : enemyIsDead();

  manageEspecialMob(current_enemy); 
  actSpecialUI()//
  player.stats.dodge -= 100

}
function handleBattle_special() {
  player.stats.damage += 50; //incremento con el especial
  player.energy -= 15; //costo del especial
  
  player.life > 0 ? playerAtaca(current_enemy) : toggleGameOver() //console.log('Gameover');

  current_enemy.life > 0 ? enemyAtaca(current_enemy) : enemyIsDead();
  //logica de especial de mob
  manageEspecialMob(current_enemy); 
  actSpecialUI()//

  player.stats.damage -= 50; //decremento del especial
}
                                     /*Looteo de Item + Fin Batalla */
function getLootedItem(enemy) {
  let lootedItem = enemy.loot[randint(0, 2)]

  if (player.inventory.includes(lootedItem)) {
    showBattleChatMessage('El monstruo no ha dejado botin', 2000)} 
  else {
    player.inventory.push(lootedItem);
    showBattleChatMessage(`El monstruo ha dejado ${lootedItem.name}`, 2000)
  }

  toggleBattleMenu(false);
  player.canWalk = true;
  battle_button.textContent = "Avanzar";

  
}
                                /* inventario*/
function mapAllInventory() {

  for (let i = 0; i < player.inventory.length; i++) {
  
    doomIventory[i].innerHTML = `<img src="${player.inventory[i].image}" alt='weapon' width="100%"  height="100%" >`;
    doomIventory[i].addEventListener('click', () => {
  
    itemName.textContent = player.inventory[i].name;

    itemUsage.innerHTML = ` <p class="item_usage_p" >Stamina: ${player.inventory[i].stamina}  </p>
                              <p class="item_usage_p">Dodge: ${player.inventory[i].dodge}       </p>
                              <p class="item_usage_p">Armor: ${player.inventory[i].armor}       </p>
                              <p class="item_usage_p">Fuerza: ${player.inventory[i].strenght}   </p>
                              <p class="item_usage_p">Damage: ${player.inventory[i].damage}     </p>
                              <p class="item_usage_p">Critical: ${player.inventory[i].critical} </p>
     `
      inventory_current_item = player.inventory[i]; //inventory set current item
    })
  }//end for
}
                              /*Game event Managers*/
function comprobateEvents(casilla , battleactive) {
         let event = new Events(player)
         if(casilla > 35 && casilla < 40 && helenaAppear) { if(event.eventHelena){event.loadEvent(event.eventHelena) ; battleActive = false ; helenaAppear = false} }
         if(casilla > 64) { if(event.eventHelena_final_battle){event.loadEvent(event.eventHelena_final_battle)}} //batalla activada
    }
                            /*Manodoble Railance */
function armorEfects(arma) {
 if (arma.name !== 'Manodoble Raylance') return;
   player.energy += 2 ; if(player.energy > player.base_energy){player.energy = player.base_energy} 
}
                                    /*Logica del especial del MOB */
function manageEspecialMob(mob) {
  if (mob.current_atk < 3) {
    mob.attack_sequence[mob.current_atk] = null;
    mob.current_atk++
  } else {
    mob.attack_sequence = []
    mob.reiniciarAtkSequence()
    mob.current_atk = 0;
  }
}
   //UI EPECIAL MOB
function actSpecialUI() {
  enemy_atkSeq_Items.forEach((element, i) => {
    if (typeof current_enemy.attack_sequence[i] == 'string') {
      let image_id = (current_enemy.attack_sequence[i] === 'normal') ? 'css/UI/normal_atk.png' : current_enemy.special;
      element.innerHTML = `<img src='${image_id}' alt='img' width='100%'   height='100%' >`;
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    }
  });
}
