var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 29;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('sam', 'samthomson');
console.log(person);
console.log(person.name, person.username);
person.printAge();
person.setType("[person type]");
var Sam = /** @class */ (function (_super) {
    __extends(Sam, _super);
    // name = "Sam"
    function Sam(username) {
        var _this = _super.call(this, "Sam", username) || this;
        _this.age = 29.5;
        return _this;
    }
    return Sam;
}(Person));
var sam = new Sam('samthomson');
console.log(sam);
