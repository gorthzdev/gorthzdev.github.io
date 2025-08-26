/*script principal*/

/* GAME MANAGER - VERSION MEJORADA */
import {board} from "./gen_world.js";
import { easyMobs, middleMobs} from "./mobs.js";
import { Player } from "./player_class.js";

// Game State
const gameState = {
  player: new Player('Nemesis'),
  currentEnemy: null,
  battleActive: false,
  animationFrameId: null,
  activeTimeouts: []
};

// DOM Elements
const elements = {
  playerDom: document.getElementById('player'),
  inventory: {
    ui: document.querySelector('.inventory'),
    button: document.querySelector('.main__inventory'),
    closed: document.querySelector('.inventory__closed')
  },
  stats: {
    ui: document.querySelector('.stats'),
    button: document.querySelector('.main__stats'),
    closed: document.querySelector('.stats__closed'),
    show: document.getElementById('all_stats'),
    characterImage: document.querySelector('.stats__character-image')
  },
  battle: {
    button: document.querySelector('.main__avanzar'),
    menu: document.querySelector('.battle-menu'),
    player: document.querySelector('.battle-player'),
    enemy: document.querySelector('.battle-enemy'),
    attackButton: document.querySelector('.battle__normal-attack'),
    chat: document.querySelector('.battle-chat'),
    options: document.querySelector('.battle-options')
  }
};
/**************************************************************************************************/
// Initialize Game
function init() {
  setupEventListeners();
  renderPlayer();
}

// Event Listeners
function setupEventListeners() {
  // Battle
  elements.battle.button.addEventListener('click', handlePlayerMove);
  elements.battle.attackButton.addEventListener('click', handlePlayerAttack);
  
  // Inventory
  elements.inventory.button.addEventListener('click', toggleInventory);
  elements.inventory.closed.addEventListener('click', () => toggleInventory(false));
  
  // Stats
  elements.stats.button.addEventListener('click', toggleStats);
  elements.stats.closed.addEventListener('click', () => toggleStats(false));
}

// Player Movement
function handlePlayerMove() {
  if (!gameState.player.canWalk || gameState.battleActive) return;
  
  gameState.player.canWalk = false;
  elements.battle.button.textContent = "Avanzando....";
  
  const diceRoll = randint(1, 6);
  
  animatePlayerMovement(diceRoll, () => {
    gameState.player.canWalk = true;
    elements.battle.button.textContent = "Avanzar";
    startBattle();
  });
}

function animatePlayerMovement(steps, callback) {
  let stepCount = 0;
  
  function moveStep() {
    if (stepCount >= steps) {
      callback();
      return;
    }
    
    changePlayerAnimation(elements.playerDom, gameState.player.animations.caminando);
    movePlayer();
    stepCount++;
    gameState.animationFrameId = requestAnimationFrame(moveStep);
  }
  
  moveStep();
}

// Battle System
function startBattle() {
  gameState.currentEnemy = randomizeMobs();
  gameState.battleActive = true;
  updateBattleUI();
  elements.battle.menu.style.display = 'grid';
}

function handlePlayerAttack() {
  if (!gameState.battleActive) return;
  
  elements.battle.chat.style.display = 'flex';
  elements.battle.options.style.display = 'none';
  
  // Player attack
  if (gameState.player.life > 0) {
    performAttack(gameState.player, gameState.currentEnemy, true);
  }
  
  // Enemy attack (if still alive)
  if (gameState.currentEnemy.life > 0) {
    setTimeout(() => {
      performAttack(gameState.currentEnemy, gameState.player, false);
    }, 1000);
  }
  
  updateBattleUI();
}

function performAttack(attacker, defender, isPlayer) {
  // Implement attack logic here
  // ...
}

// UI Functions
function updateBattleUI() {
  // Update both player and enemy UI
  // ...
}

function toggleInventory(show) {
  elements.inventory.ui.style.display = 
    typeof show === 'boolean' ? (show ? 'grid' : 'none') : 
    elements.inventory.ui.style.display === 'none' ? 'grid' : 'none';
}

// Helper Functions
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize the game
init();

