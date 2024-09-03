// Interfarence to join the both in one
function abcd(human) {
    human.age;
}
// class in Typescript
var Airpod = /** @class */ (function () {
    function Airpod() {
        this.price = 25000;
        this.img = "img/02/airpod";
        this.color = "black";
    }
    Airpod.prototype.playMusic = function () {
        console.log("music playing...");
    };
    Airpod.prototype.switchMode = function (mode) {
        console.log(mode);
    };
    return Airpod;
}());
// More Pratice
var Remote = /** @class */ (function () {
    function Remote() {
        this.color = "white";
        this.category = "ac";
        this.company = "voltas";
        this.temperature = 22;
    }
    Remote.prototype.turnOn = function () {
        console.log("turning On....");
        console.log("turned On....");
    };
    Remote.prototype.turnOff = function () {
        console.log("turing off..");
        console.log("turned off..");
    };
    Remote.prototype.raiseTemperature = function () {
        this.temperature++;
    };
    Remote.prototype.decreaseTemperature = function () {
        console.log("decreasing temperature by 2");
    };
    return Remote;
}());
// constractor
var Earphones = /** @class */ (function () {
    function Earphones(name, price) {
        this.name = name;
        this.price = price;
    }
    return Earphones;
}());
var e1 = new Earphones("Apple", 25000);
var e2 = new Earphones("Oppo", 2300);
// pratice
var Pendrive = /** @class */ (function () {
    function Pendrive() {
        this.name = "Pendrive";
    }
    Pendrive.prototype.getName = function () {
        console.log(this.name);
    };
    return Pendrive;
}());
var p1 = new Pendrive();
p1.name = "Super Pendrive";
var User = /** @class */ (function () {
    function User() {
        this.balance = 1200;
    }
    User.prototype.getBalance = function () {
        console.log(this.balance);
    };
    return User;
}());
var u1 = new User();
//Get and Set
var Abcd = /** @class */ (function () {
    function Abcd(username) {
        this.username = username;
        this.username = username;
    }
    Object.defineProperty(Abcd.prototype, "name", {
        get: function () {
            return this.username;
        },
        set: function (value) {
            this.username = value;
        },
        enumerable: false,
        configurable: true
    });
    return Abcd;
}());
var abcd1 = new Abcd("harsh");
abcd.name = "harshita";
console.log(abcd1.name);
