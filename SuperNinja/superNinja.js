class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`${this.name}`);
    }

    showStats() {
        console.log(`name: ${this.name}`)
        console.log(`strength: ${this.strength}`)
        console.log(`speed: ${this.speed}`)
        console.log(`health: ${this.health}`)
    }
    
    drinkSake() {
        this.health += 10;
    }
}

// const ninja1 = new Ninja("Ichigo")
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();


class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("I love lamp")
    }
}

const sensei = new Sensei("Splinter");
sensei.showStats();
sensei.speakWisdom();
sensei.showStats();