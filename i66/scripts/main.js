/* GAME MANGER*/
import {board} from "./gen_world.js";
import { easyMobs, liquenCorrupto, middleMobs} from "./mobs.js";
import { Player } from "./player_class.js";
import {Events} from  "./events.js";

//creamos al jugador
let player = new Player('Granjero');
let playerDom = document.getElementById('player');
let current_enemy = null;
let inventory_current_item = null;

let domScore = document.getElementById('score');
function actScore(){
  domScore.textContent = `Score: ${player.score}`;
}
player.energy = 20;

let liquenCorruptoAppear = randint(25,50);
function grantEnergy(cantidad){
   player.energy+= cantidad;
   player.energy > 20? player.energy = 20 : player.energy ; //max energy
}

changePlayerAnimation(playerDom ,player.animations.iddle); //iddle

const rootStyles = document.documentElement.style;
player.actual_square = 1;

//botones de inventario
const inventory_ui = document.querySelector('.inventory')
const inventory_button = document.querySelector('.main__inventory')
const inventory_closed = document.querySelector('.inventory__closed')
const doomIventory = document.querySelectorAll('.inventory__slot')
//panel de inventario//
const itemName = document.querySelector('.inventory__item-name') //itemname
const itemUsage = document.querySelector('.inventory__item-usage')
const equipInventoryItems = document.querySelector('.inventory__use-button') //equip

equipInventoryItems.addEventListener('click',()=>{
  if(inventory_current_item){
    console.log(inventory_current_item , 'current item');
    player.equipItem(inventory_current_item);
    
    console.log('Equipado', inventory_current_item);
  }
})
//gameover
const domGameover = document.querySelector('.gameover');
const domGameoverScore = document.querySelector('.gameover_score')
const domGameoverMessage = document.querySelector('.gameover_message')
function toggleGameOver(){
  domGameover.style.display = 'grid';
  domGameoverScore.textContent = `Score: ${player.score}`
  domGameoverMessage.textContent = `Ha sido Asesinado por un ${current_enemy.name} [ Casilla ${player.actual_square} ] `
}

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

    //enemy atacksequence
    const DOmEnemy_atk_sequence = document.querySelector('.enemy_atack-sequence')
    const enemy_atkSeq_Items = document.querySelectorAll('.enemy_seq')


//eventos de batalla *******************************
battle_button.addEventListener('click' , handleMovement);
//eventos de inventario

inventory_button.addEventListener('click' , e=>{

 if(inventory_ui.style.display === 'none'){
    inventory_ui.style.display = 'grid';
    mapAllInventory(); ///>>>>>>>>> INVENTARIO MAP
 }else{
    inventory_ui.style.display = 'none';
 } 

});
inventory_closed.addEventListener('click' , e=>{

 inventory_ui.style.display = 'none';

})

//eventos de stats
stats_button.addEventListener('click' , e=>{
    console.log('me ejecuto')
 stats_ui.style.display === 'none'? stats_ui.style.display = 'grid': stats_ui.style.display = 'none';

  statsShow.innerHTML = ` <span>Life :${player.life}/${player.stats.baselife}</span>
                          <span>Armor :${player.stats.armor}</span>
                          <span>Dodge :${player.stats.dodge} %</span>
                          <span>Damage :${player.stats.damage}</span>
                          <span>Critical :${player.stats.critical} %</span>
  `
  statsCharacterImage.innerHTML = `<img src="img-characters/hero_iddle.gif" height="100%   width="100%   "></img>`
})
//boton de cerrar stats
stats_closed.addEventListener('click' , e=>{
    stats_ui.style.display = 'none';
})

//funcion randint
function randint(min,max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}



function changePlayerAnimation(playerDom , animacion ){
   playerDom.innerHTML =   ` <img src="${animacion}" alt="img" class="character_imgs">`
}
//randoms mob*********************************************************************************************************
function randomizeMobs(){
   if (player.actual_square < 25){ return easyMobs(randint(1,3)) }
  if (player.actual_square >= 25 && player.actual_square !== liquenCorruptoAppear ){ return middleMobs(randint(1,3)) }  
 if (player.actual_square === liquenCorruptoAppear){ return liquenCorrupto() } 
}

//Botones de Batalla//
attack_button.addEventListener('click', handleBattle );
attack_button_special.addEventListener('click', ()=>{
  if(player.energy > 14){handleBattle_special();
  }else{
    attack_button_special.textContent = 'Insufiente Energia'
    setTimeout(()=>{
      attack_button_special.textContent = 'Special Attack [15 E]'
    },2000)
  }
} );


/*maneja el movimiento*/
function handleMovement(){
    if(player.canWalk){
       battle_button.textContent = "Avanzando....";
       changePlayerAnimation(playerDom,player.animations.caminando)
      
       let dados = randint(1,6);
       //ganar energia
       grantEnergy(dados);
       player.score += dados * 10;
       actScore();

       console.log(dados , 'dados')

      //movimiento
       handleSteps(dados)

       player.canWalk = false;
      
       console.log('despues del step')
   }
}
function movePlayer(rootStyles , board , actualSquare){
     console.log('Me ejecuto actualizo custom properties -function movePlayer');
     rootStyles.setProperty('--player-x-pos' , `${board[actualSquare].x_cord - 60}px`); //hay que restar una distancia la coordenada 60 en variable para responsive
     rootStyles.setProperty('--player-y-pos' ,`${board[actualSquare].y_cord - 50}px` ); //50 original
     player.actual_square ++;
}

function handleSteps(steps ){
   console.log('I do Steps')
   if(steps === 0){

      return  manageevents();  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>BATALLA ACTIVADA
   };
   setTimeout(()=>{
    movePlayer(rootStyles, board, player.actual_square)
    //recursividad
    steps --;
    handleSteps(steps);

   },1000)
}
//toggle menu
function  toggleBattleMenu(election){
   election? battle_menu.style.display = 'grid': battle_menu.style.display = 'none'
  }
  //actulize battle enemy
function  actuallizeBattleModule(player , enemy) {
    battleplayer.innerHTML = `<div id="stat-player"> 
    <div style="width:${ player.life / player.stats.baselife * 100}% ; background-color:green; height=100% ; text-align: center ; transition: width 600ms">${player.life}/${player.stats.baselife}</div>
   </div> 
   <div id="stat-player_energy"> 
    <div style="width:${ player.energy / 20 * 100}% ; background-color:orange; height=99% ; text-align: center ; transition: width 600ms">${player.energy}/${20}</div>
   </div> 
   <img src="img-characters/hero_molesto.gif" height="80%   width="80%"></img>`
   
    battleenemy.innerHTML = ` <div id="stat-enemy">
    <div style="width:${enemy.life /enemy.baselife * 100}% ; background-color:green; height=99% ; text-align: center ; transition: width 600ms">${enemy.life}/${enemy.baselife}</div>
   </div>
   <div id="name-enemy">${enemy.name}</div> 
   <img src="${enemy.image}" height="80%   width="80%   "></img>`
  //// actuallize ui

 
   if(player.life <= 0){toggleGameOver()}; //gameover funcional
  }
  //toggle battle
function toggleBattleChat(election){
  if (election) {
    setTimeout(() => {
      battle_options.style.display = 'none';
      battle_chat.textContent = "";
      battle_chat.style.display = 'grid';
    }, 200);
  }
  else {
    setTimeout(() => {
      battle_options.style.display = 'grid';
      battle_chat.textContent = "";
      battle_chat.style.display = 'none';
    }, 200);
  }
}
// 
function showBattleChatMessage(message){  //mejorar
    setTimeout(() => {
      battle_chat.textContent = message;
    }, 200);
}

///////


 /***** battle */
 function  playerAtaca(enemy) {
     toggleBattleChat(true);

    if ( enemy.dodge < randint(1, 100)) {
      if (player.stats.critical > randint(1, 100)) {
        //critical
        enemy.life = enemy.life + enemy.armor - player.stats.damage * 2;
        showBattleChatMessage('Critical Attack');
      }
      else {
        //normal attack
        enemy.life = enemy.life + enemy.armor - player.stats.damage;
      }
    }
    else {
      //mob esquiva
      showBattleChatMessage('Mob Esquiva');
    }
    actuallizeBattleModule(player , current_enemy);

    if (enemy.life <= 0){ getLootedItem(current_enemy)}
    if( enemy.life <= 0 ){ toggleBattleChat(false)}
    
  }//fin player atk

  function enemyAtaca(enemy){
   if(enemy.attack_sequence[enemy.current_atk] === 'special'){ enemy.damage += 50  ; console.log('Especial atk done init >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.',enemy.current_atk )   }//mob especial on
   if( player.stats.dodge < randint(1,100)){
      if( enemy.critical > randint(1,100)){
           player.life = player.life + player.stats.armor - enemy.damage * 2;
      }else{
           player.life = player.life + player.stats.armor - enemy.damage;
      }
   }else{
      showBattleChatMessage('He esquivado Monstruo')
   }

   if(enemy.attack_sequence[enemy.current_atk] === 'special   ataque done termina>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.'){ enemy.damage -= 50      }//mob especial quit
   actuallizeBattleModule(player , current_enemy);

  // if(enemy.current_atk < 3) {current_enemy++ ; console.log('Current decrementa despues de la fase de batalla')} ///decrementa despues
   
   
   toggleBattleChat(false);//apaga el chat
   
 //  console.log('Apago Chat')

  }//fin enemy 
/*************************************************************************************************** */
//funciones de batalla ************************************************************************************************************

function battleModuleON(){
  setTimeout(()=>{
            console.log('Battle Module Active');
            battle_button.textContent = "Avanzar"; // module on
            changePlayerAnimation(playerDom,player.animations.iddle)
            player.canWalk = true;

            //UI
           toggleBattleMenu(true);
           actuallizeBattleModule(player,current_enemy)
           actSpecialUI();
          },2000);

   current_enemy = randomizeMobs(); //mob random
 //  console.log(current_enemy);
  
}

function handleBattle(){
      
   //     console.log( player , current_enemy);
        if(player.equipment.weapon) armorEfects(player.equipment.weapon); //efecto de armas
        
        player.life >  0?  playerAtaca(current_enemy) :  toggleGameOver() ;//console.log('Gameover');  ////GAMEOVER
        console.log('Enemy ataca')

       

        current_enemy.life > 0 ? enemyAtaca(current_enemy): toggleBattleMenu(false);player.score+= current_enemy.baselife ; actScore(); ;//mata npc
        manageEspecialMob(current_enemy);///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        actSpecialUI()//

      // if(current_enemy.current_atk < 3) {current_enemy.current_atk++} ///decrementa despues
        
 }
function handleBattle_special(){
        player.stats.damage+= 50; //incremento con el especial
        player.energy-= 15;
      //  console.log( player , current_enemy);
        player.life >  0?  playerAtaca(current_enemy) : toggleGameOver() //console.log('Gameover');

      //  console.log('Enemy va a tacar Antes')
       

        current_enemy.life > 0 ? enemyAtaca(current_enemy): toggleBattleMenu(false); player.score+= current_enemy.baselife ; actScore();;//mata npc
         manageEspecialMob(current_enemy); //////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
         actSpecialUI()//

        player.stats.damage-=50; //decremento del especial
        
 }


 function getLootedItem(enemy){

   let lootedItem = enemy.loot[randint(0,2)]
   player.inventory.push(lootedItem);
   showBattleChatMessage(`El monstruo ha dejado ${lootedItem}`)
 //  console.log(player.inventory);
 //  console.log(lootedItem);
 }
 function mapAllInventory(){
   //doomIventory.forEach(e)
   

   console.log(player.inventory , 'Inventario')
   console.log(doomIventory , 'Map Sloots')
   for(let i = 0 ; i < player.inventory.length ; i++){
      console.log('mapeo inventario')
   doomIventory[i].innerHTML = `<img src="${player.inventory[i].image}" alt='weapon' width="100%"  height="100%" >` ;
   doomIventory[i].addEventListener('click', ()=>{
     console.log('Log listener inventario');
     
     itemName.textContent = player.inventory[i].name;
     
     itemUsage.innerHTML = `  <p class="item_usage_p" >Stamina: ${player.inventory[i].stamina}  </p>
                              <p class="item_usage_p">Dodge: ${player.inventory[i].dodge}       </p>
                              <p class="item_usage_p">Armor: ${player.inventory[i].armor}       </p>
                              <p class="item_usage_p">Fuerza: ${player.inventory[i].strenght}    </p>
                              <p class="item_usage_p">Damage: ${player.inventory[i].damage}     </p>
                              <p class="item_usage_p">Critical: ${player.inventory[i].critical} </p>

     `
     inventory_current_item = player.inventory[i]; //inventory set current item
   })

   }
 }

 //////events
 function manageevents(){
   // console.log('Me ejecuto manage events' , player.actual_square)
    let event = new Events(player)
    event.comprobateEvents(player.actual_square , battleModuleON);

 }
 //player.equipment.weapon
 function armorEfects(arma){  
   arma.name === 'Manodoble Raylance'? player.energy += 2: player.energy +=0;
 }

 /////////// MOB ESPECIAL//////////////////////
 function manageEspecialMob(mob){
   if (mob.current_atk < 3){
     mob.attack_sequence[mob.current_atk] = null;
     mob.current_atk ++
     
   }else{
    mob.attack_sequence= []
    mob.reiniciarAtkSequence()
    mob.current_atk = 0;
   }
  
 }
 function actSpecialUI(){
   console.log('Enemy current atk , antes de UI act' , current_enemy.current_atk)
   console.log('Enemy seq antes de UI', current_enemy.attack_sequence)
   enemy_atkSeq_Items.forEach((element, i) =>{
     if( typeof current_enemy.attack_sequence[i] == 'string'){
    
      let image_id = (current_enemy.attack_sequence[i] === 'normal')? 'css/UI/normal_atk.png' : current_enemy.special;
      element.innerHTML = `<img src='${image_id}' alt='img' width='100%'   height='100%' >`;
      element.style.display = 'flex';
      }else{
      element.style.display = 'none';
      }
   });
 }
 