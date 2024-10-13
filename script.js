//complete this code
// Animal class definition
class Animal {
    constructor(species) {
        this._species = species; // Private property
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat class definition
class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log('purr');
    }
}

// Dog class definition
class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    bark() {
        console.log('woof');
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
