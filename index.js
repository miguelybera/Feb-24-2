function Person (name,gender,age){

    this.name = name;
    this.gender= gender;
    this.age = age;
}

let juan = new Person("Juan Dela Cruz", "Male", 35);
document.write(`<h2>${juan.name} is a ${juan.gender} person </h2>`)