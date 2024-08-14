class Parant{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parant{
    constructor(name, age){
        super();
        this.name = name;
        this.age = age;
    }
    getFullName(){
        return this.name + " " + this.age + " " + this.fatherName;
    }
}

const baby = new Child("Arnold", 5);
const baby2 = new Child("Tom", 9);
console.log(baby, baby2)
console.log(baby.getFullName(), baby2.getFullName());