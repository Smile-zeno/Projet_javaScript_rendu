/* ----- Sans les classes ----- */

let PATRICK = {name1 : 'Patrick', pv : 14, attack1 : 4, precision1 : 0.5}
let GERARD = {name1 : 'Gerard', pv : 12, attack1 : 3, precision1 : 0.7}

function Attaquer(damage1, health){ /* inflige les dégats de l'attaquant infliger a l'attaquer */
    health -= damage1
    return health
}

function precision1(fighter, defender){
    let touche = Math.random()
    if (touche < fighter.precision1) { /* vérifie si l'attaque touche le personnage viser */
        console.log(fighter.name1, "hit", fighter.attack1, "damage");
        defender.pv = Attaquer(fighter.attack1,defender.pv); /* appel la fonction Attaquer pour infliger des dégats */
    } else {
        console.log(fighter.name1, "miss");
    }
}

while(PATRICK.pv > 0 && GERARD.pv > 0){ /* boucle qui répète chaque tour tant que l'un est en vie */
    precision1(PATRICK, GERARD)
    if (GERARD.pv <= 0) {
        console.log(PATRICK.name1, "Win")
        break;
    }
    precision1(GERARD, PATRICK)
    if (PATRICK.pv <= 0) {
        console.log(GERARD.name1, "Win")
        break;
    }
    console.log("Il reste ", PATRICK.pv, "points de vie a", PATRICK.name1, "et", GERARD.pv, "a", GERARD.name1);
}
console.log("Score finale : \n", PATRICK.name1, PATRICK.pv, "points de vie \n", GERARD.name1, GERARD.pv, "points de vie");

/* ----- Avec les classes ----- */
console.log("-------------------------------------------------------------")

class Warrior {
    constructor(name, attack, defense, precision) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.precision = precision;
    }

    getPrecision(cible) {
        if (Math.random() < this.precision) {
            console.log("attaque réussi", this.attack, "dégats");
            cible.getDamage(this.attack)
        } else {
            console.log("louper");
        }
    }
    getDamage(degat) {
        this.defense = this.defense - degat
        return this.defense
    }
}

let JHON = new Warrior("Jhon", 4, 15, 0.5)
let ERICK = new Warrior("Erick", 3, 16, 0.7)

while (JHON.defense > 0 && ERICK.defense > 0) {
    ERICK.getPrecision(JHON)
    if (JHON.defense <= 0) {
        console.log(ERICK.name, "Win")
        break;
    }
    JHON.getPrecision(ERICK)
    if (ERICK.defense <= 0) {
        console.log(JHON.name, "Win")
        break;
    }
    console.log("Il reste ", ERICK.defense, "points de vie a", ERICK.name, "et", JHON.defense, "a", JHON.name);
}
console.log("Score finale : \n", ERICK.name, ERICK.defense, "points de vie \n", JHON.name, JHON.defense, "points de vie");