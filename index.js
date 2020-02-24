class Person{
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    walk(distance){
        console.log(`${this.name} can walk up to ${distance} miles`)
    }
}
let juan = new Person ("Juan Dela Cruz", "male", 34);
juan.walk(5);