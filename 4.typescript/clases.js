var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Implements: Si una clase implementa una interfacce, vamos a tener que tener sus propiedades dentro la clase
var Heroe = /** @class */ (function () {
    function Heroe(name, age, alias, job, email) {
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.job = job;
        this.email = email;
    }
    Heroe.prototype.getAlias = function () {
        return this.alias;
    };
    Heroe.prototype.getAge = function () {
        if (this.age > 18)
            return this.age;
        return "pepe";
    };
    return Heroe;
}());
var superman2 = new Heroe("clark kent", 28, "superman", undefined, "superman@gmail.com");
var Persona = /** @class */ (function () {
    function Persona(name, age) {
        this.age = age;
        this.name = name;
    }
    Persona.prototype.getName = function () { return this.name; };
    return Persona;
}());
var Alumn = /** @class */ (function (_super) {
    __extends(Alumn, _super);
    function Alumn(name, age, email) {
        var _this = _super.call(this, name, age) || this;
        _this.email = email;
        return _this;
    }
    return Alumn;
}(Persona));
var alumnito = new Alumn("Pepe", 25, "pepito@gmail.com");
console.log(alumnito);
