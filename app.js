/*
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

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        constructorFn.prototype.print = function() {
            console.log(this)
        }
    }
}

@logging(false)
@printable
class Plant {
    name = "Green plant"
}
const plant = new Plant()
(<any>plant).print()
*/
// Method decorator
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    return Project;
}());
var project = new Project("Super project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
