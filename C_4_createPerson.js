function createPerson(name, age) {
 
    let _name = name;
    let _age = age;

    return obj = {

        getName() {
            return _name;
        },

        getAge(){
            return _age;
        },

        setName(sName){
            _name = sName
        },

        setAge(sAge){
            _age = sAge
        },
    }
}

const person = createPerson("Alice", 30);
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30
person.setName("Bob");
person.setAge(25);
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 25