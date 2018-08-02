class User {
    constructor(name, age, weight){
      this.name = name;
      this.age = age;
      this.weight = weight;
    }

    displayWeight() {
        console.log(`weight is ${this.weight}`);
    }
}

let nidhin = new User("Nidhin", 23, 55);
let kumar = new User("kumar", 24, 87);
nidhin.displayWeight();
kumar.displayWeight();