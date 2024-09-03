// // Interfarence to join the both in one

// interface Human {
//   name: string;
// }

// interface Human {
//   age: number;
// }

// function abcd(human: Human) {
//   human.age;
// }

// // class in Typescript

// class Airpod {
//   price = 25000;
//   img = "img/02/airpod";
//   color = "black";

//   playMusic() {
//     console.log("music playing...");
//   }

//   switchMode(mode: string) {
//     console.log(mode);
//   }
// }

// // More Pratice

// class Remote {
//   color = "white";
//   category = "ac";
//   company = "voltas";

//   temperature = 22;

//   turnOn() {
//     console.log("turning On....");
//     console.log("turned On....");
//   }

//   turnOff() {
//     console.log("turing off..");
//     console.log("turned off..");
//   }

//   raiseTemperature() {
//     this.temperature++;
//   }

//   decreaseTemperature() {
//     console.log("decreasing temperature by 2");
//   }
// }

// // constractor

// class Earphones {
//   name: string;
//   price: number;

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }

// let e1 = new Earphones("Apple", 25000);
// let e2 = new Earphones("Oppo", 2300);

// // pratice

// class Pendrive {
//   name = "Pendrive";
//   getName() {
//     console.log(this.name);
//   }
// }

// let p1 = new Pendrive();
// p1.name = "Super Pendrive";

// class User {
//   private balance = 1200;

//   getBalance() {
//     console.log(this.balance);
//   }
// }

// let u1 = new User();

// //Get and Set

// class Abcd {
//   constructor(public username: string) {
//     this.username = username;
//   }

//   get name() {
//     return this.username;
//   }

//   set name(value: string) {
//     this.username = value;
//   }
// }

// let abcd1 = new Abcd("harsh");
// abcd.name = "harshita";
// console.log(abcd1.name);

let a: number = 2;

console.log("Hello Typescript");
