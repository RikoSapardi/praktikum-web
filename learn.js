// membuat variabel
let myNumber = 16;
let myString = "Hello";
let myBoolean = true;
const phi = 3.14;
// menampilkan informasi ke console
console.log(myNumber);
console.log(myString);
console.log(myBoolean);
console.log(phi);
// menampilkan informasi dalam bentuk alert pada window
// window.alert("Angka favorit saya adalah : " + myNumber);
// window.alert("Angka favorit saya adalah : " + myNumber);
// window.alert(`Angka favorit saya adalah : ${myNumber}`);

console.log("");
let x = 8;
let y = 4;
console.log(x, y);
console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x++ =", x++);
console.log("++x =", ++x);
console.log("x-- =", x--);
console.log("--x =", --x);

console.log("");
let a = 8;
let b = 4;
console.log(a, b);
console.log("a > b =", a > b);
console.log("a < b =", a < b);
console.log("a >= b =", a >= b);
console.log("a <= b =", a <= b);
console.log("a == b =", a == b);
console.log("a != b =", a != b);
console.log("a === b =", a === b);
console.log("a !== b =", a !== b);

console.log("");
console.log("true && true =", true && true);
console.log("true && false =", true && false);
console.log("false && true =", false && true);
console.log("false && false =", false && false);
console.log("true || true =", true || true);
console.log("true || false =", true || false);
console.log("false || true =", false || true);
console.log("false || false =", false || false);
console.log("!true =", !true);
console.log("!false =", !false);

console.log("");
function luas_persegi(lebar) {
  var panjang = 10;
  var luas = lebar * panjang;
  console.log(panjang + " + " + lebar + " = " + luas);
}

function luas_segitiga(alas, tinggi) {
  var luas = 0.5 * alas * tinggi;
  console.log("0.5 * " + alas + " * " + tinggi + " = " + luas);
}

function volume_balok(panjang, lebar, tinggi) {
  var volume = panjang * lebar * tinggi;
  console.log(panjang + " * " + lebar + " * " + tinggi + " = " + volume);
}

luas_persegi(6);
console.log("Luas Segitiga\n");
luas_segitiga(5, 12);
console.log("Volume_Balok\n");
volume_balok(10, 11, 33);

console.log("");
var hewan = ["beruang", "Lumba-Lumba", "Semut", "Unta"];
console.log(hewan[0]);
console.log(hewan[1]);
console.log(hewan[2]);
console.log(hewan[3] + "\n");

hewan[1] = "anjing";
console.log(hewan);

console.log("\nmethod push");
hewan.push("ular");
console.log(hewan);

console.log("\nmethod pop");
hewan.pop();
console.log(hewan);

console.log("\nproperty length");
console.log(hewan.length);

console.log("\nmethod unshift");
hewan.unshift("kelinci");
console.log(hewan);

console.log("\nmethod shift");
hewan.shift();
console.log(hewan);

console.log("\nmethod short");
hewan.sort();
console.log(hewan);

console.log("\nmethod reverse");
hewan.reverse();
console.log(hewan);

console.log("");
let person = {
  firstName: "riko",
  lastName: "sapardi",
  id: 09876,
  alamat: "Jalan Merdeka",
  status: "Pelajar",
  fullName: function () {
    return this.firstName + " " + this.lastName + " id =" + this.id;
  },
};

console.log("\nMengakses dengan dot notation");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);
console.log(person.alamat);
console.log(person.status);
console.log(person.fullName());

console.log("\nmengakses dengan bracket notation");
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["id"]);
console.log(person["alamat"]);
console.log(person["status"]);
console.log(person["fullName"]());

console.log("");
console.log(0.1 + 0.2 == 0.3);
console.log(1 + "1");
console.log(1 - "1");
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);
