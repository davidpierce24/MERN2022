// classes and oop

// all classes have a constructor
// attributes that go into the constructor
// classes have methods that allow us to perform actions

class Character {
    constructor(name, health, stength, intelligence) {
        this.name = name;
        this.health = health;
        this.stength = stength;
        this.intelligence = intelligence;
    }

    attack(target) {
        target.health -= this.stength;
        console.log(`${this.name} slapped ${target.name} for ${this.stength} damage!`)
        console.log(`${target.name} now has ${target.health} HP`)
    }
}

// introducing inheritance
class MagicBoy extends Character {
    constructor(name, health, stength, intelligence, mana) {
        super(name, health, stength, intelligence);
        this.mana = mana;
    }

    attack(target) {
        target.health -= this.intelligence;
        this.mana -= 5;
        console.log(`${this.name} slung a magic trash can at ${target.name} for ${this.intelligence} damage!`)
        console.log(`${target.name} now has ${target.health} HP`)
    }
}





const char1 = new Character("Ichigo", 600, 50, 2);
const char2 = new Character("Kenpachi", 500, 40, -1);

char1.attack(char2);


const char3 = new MagicBoy("Orihime", 20, 2, 4, 50);

char3.attack(char1);