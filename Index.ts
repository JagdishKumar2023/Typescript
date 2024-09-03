//Baic type

let array: boolean[] = [true];

// let bigInt: bigint = 12345625565n;

// Tuples

let tuple: [number, string, boolean, object] = [1, ", onuBasing", true, {}];

//enum

enum Color {
  primary = "Red",
  secondary = "Blue",
  teritery = "Green",
}

let mycolor: Color = Color.primary;

//ANY

let anything: any = "could be a string";
anything = 32;

//Unknow

let notSure: unknown = 4;

if (typeof notSure === "number") {
  notSure.toPrecision;
}

if (typeof notSure === "string") {
  notSure.charAt(1);
}

//Never

function inifinite(message: string): never {
  throw new Error(message);
}
