function logged(constructorFn: Function) {
    console.log(constructorFn)
}

@logged
class Person {

}

// Factory
function logging(value: boolean) {
    return value ? logged : null
}

@logging(true)
class Car {

}