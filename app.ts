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

// Getters & Setters
class Plant {
    private _species: string = "Default"

    get species() {
        return this._species
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value
        } else {
            this._species = "Default"
        }
    }
}

let plant = new Plant()
console.log(plant.species)
plant.species = "AB"
console.log(plant.species)
plant.species = "Green plant"
console.log(plant.species)