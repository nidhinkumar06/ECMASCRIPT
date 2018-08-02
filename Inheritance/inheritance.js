class User {
    constructor(name, age, weight){
      this.name = name;
      this.age = age;
      this.weight = weight;
    }

    displayName() {
        console.log(`name is ${this.name}`);
    }

    displayAge() {
        console.log(`age is ${this.age}`);
    }

    displayWeight() {
        console.log(`weight is ${this.weight}`);
    }
}

class ProgramLanguage extends User {
    constructor(name, age, weight, language){
        super(name, age, weight);
        this.language = language;
    }

    displayLanguage() {
        console.log(`selected language ${this.language}`);
    }
}

let nidhin = new User("Nidhin", 23, 55);
nidhin.displayWeight();
console.log(`========================`);
let kumar = new ProgramLanguage("Kumar", 24, 98, "Java");
kumar.displayName();
kumar.displayAge();
kumar.displayWeight();
kumar.displayLanguage();