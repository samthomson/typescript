/*
// Exercise 1 - How was your TypeScript Class?
class Car {

    name: string
    acceleration: number = 0

    constructor (name: string) {
        this.name = name
    }

    honk(): void {
        console.log("Toooooooooot!");
    };
 
    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}
let car = new Car("BMW")
car.honk()
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
class BaseObject {

    width: number = 0
    length: number = 0

    constructor() {
    }
}

class Rectangle extends BaseObject {
    constructor(width: number, length: number) {
        super()
        this.width = width
        this.length = length
    }

    calcSize():number {
        return this.width * this.length
    }
}

let rectangle = new Rectangle(12, 4)
console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = ''

    get firstName() {
        return this._firstName
    }

    set firstName(value: string) {
        if (value.length > 2) {
            this._firstName = value
        }else{
            this._firstName = ''
        }
    }
}
let person = new Person
console.log(person.firstName);
person.firstName = "Sa";
console.log('name: ', person.firstName);
person.firstName = "Sam";
console.log('name: ', person.firstName);
*/ 
