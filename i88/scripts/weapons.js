/*clase de armas*/

class Weapon {
    constructor(name, strenght, damage, critical, stamina, armor, dodge, sloot, image, type) {
        this.name = name;
        this.strenght = strenght;
        this.damage = damage;
        this.critical = critical;
        this.stamina = stamina;
        this.armor = armor;
        this.dodge = dodge;
        this.sloot = sloot; //casilla de equipo que usan - Armas 3 -
        this.image = image;
        this.type = type;

    }
}
// work , axe , sword , asta , dagas , mace

// name strengt damage critical stamina armor dodge sloot
let veteran_dagues = new Weapon("Dagas de Veterano", 15, 25, 8, 15, 5, 5, 3, 'weapons_img/veteran_dagues.gif' , 'daga')
let estoque = new Weapon("Estoque", 8, 15, 8, 5, 0, 10, 3, 'weapons_img/estoque.gif', 'sword')
let oz = new Weapon("Oz Gastada", 7, 13, 8, 5, 0, 15, 3, 'weapons_img/oz.gif', 'work')
let guadana = new Weapon("Guadaña", 5, 20, 15, 10, 10, 5, 3, 'weapons_img/guadana.gif' , 'asta')
let manodoble_br = new Weapon("Manodoble Brillante", 20, 25, 5, 15, 0, 5, 3, 'weapons_img/manodoble_br.gif' , 'sword')
let mazo_liqueneano = new Weapon("Mazo Liqueneano", 15, 25, 5, 15, 5, 5, 3, 'weapons_img/mazo_liqueneano.gif' , 'mace')

let cuchillo_ox = new Weapon("Cuchillo Oxidado", 5, 15, 3, 2, 0, 8, 3, 'weapons_img/cuchillo_ox.gif' , 'daga')
let espada_insc = new Weapon("Espada con Inscripciones", 25, 15, 8, 15, 0, 10, 3, 'weapons_img/insc_sword.gif' , 'sword')
let hacha_brut = new Weapon("Hacha de la Brutalidad", 25, 30, 10, 10, 0, 8, 3, 'weapons_img/brutality.gif', 'axe')   //+ fuerza

let daga_goblin = new Weapon("Dagas de Goblin", 8, 15, 10, 8, 0, 8, 3, 'weapons_img/dagas_goblin.gif', 'daga')
let crow_lance = new Weapon("Lanza de los Cuervos", 15, 30, 15, 20, 0, 8, 3, 'weapons_img/crow_lance.gif' , 'asta')
let manodoble_ray = new Weapon("Manodoble Raylance", 30, 30, 15, 20, 10, 10, 3, 'weapons_img/raylance.gif' , 'sword')  //epic
let voidness = new Weapon("Manodoble Voidness 7", 50, 50, 15, 20, 10, 10, 3, 'weapons_img/voidness7.gif', 'sword')   //legendary

//name, strenght, damage, critical, stamina, armor, dodge, sloot , image
//Estas son las armas basicas del juego el juego incluye codigo para equipar armaduras con sloot 1 y 2

export const weapons = {
    estoque: estoque, 
    oz: oz,
    manodoble_br: manodoble_br,
    c_oxidado: cuchillo_ox,
    insc_sword: espada_insc,
    axe_br: hacha_brut,
    daga_dent: daga_goblin,
    manodoble_ray: manodoble_ray,
    crow_lance: crow_lance,
    guadana: guadana,
    mazo_liqueneano: mazo_liqueneano,
    voidness: voidness,
    veteran_dagues : veteran_dagues
}
