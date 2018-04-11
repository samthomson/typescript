class Person {
    name: string
    private type: string
    protected age: number = 29

    constructor(name: string, public username: string) {
        this.name = name
    }

    printAge() {
        console.log(this.age)
    }

    setType(type: string) {
        this.type = type
        console.log(this.type)
    }
}

const person = new Person('sam', 'samthomson')

console.log(person)
console.log(person.name, person.username)
person.printAge()
person.setType("[person type]")

class Sam extends Person {
    // name = "Sam"

    constructor(username: string) { 
        super("Sam", username)
        this.age = 29.5
    }
}

const sam = new Sam('samthomson')
console.log(sam)
