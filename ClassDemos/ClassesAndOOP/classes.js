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
const char1 = new Character("Ichigo", 100, 50, 2);
const char2 = new Character("Kenpachi", 500, 40, -1);

char1.attack(char2);