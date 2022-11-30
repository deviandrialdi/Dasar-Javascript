// // // ------------- TYPE DATA PRIMITIVE ---------------//
// // const strVar = "Hello WOrld"; // string
// // const intVar = 123456; // number / int
// // // bigInt => untuk jumlah number yang lebih besar daripada tipe data number
// // let undefinedVar; // undifined tidak ada nilai.
// // let boolVar = true; // true atau false
// // // // symbol => untuk pengenal yang unik
// // let nullVar = null; // ada nilai tapi nol.

// // // // misal

// // // ---------------------- COLLECTION --------- ////

// // // ARRAY DAN OBJECT

// // let objVar = {
// //   // object
// //   id: 1, // property 1
// //   name: "Jhon Wick", // property 2
// //   isMarried: false, // property 3
// //   addres: {
// //     city: "NYC",
// //     country: "USA",
// //     portal_code: "14045",
// //   },
// //   hobby: ["Hobby1", "Hobby2", "Hobby3"],
// // }; // object

// // let arrVar = []; // alt + shift + arraow panah atas

// // const strArr = ["Apel", "Jeruk", "mangga"]; // array of string
// // const intArr = [1, 2, 3, 4, 5]; // array of integger
// // const objArr = [objVar, objVar, objVar];

// // console.log(objArr);

// /*
// TYPE DATA YANG WAJIB DIPAHAMI
// PRYMITIVE
// - STRING
// - NUMBER
// - BOOLEAN

// COLLECTION
// ARRAY
// OBJECT
// */

// // expression sebuah express itu memiliki operand dan operator, sama dengan penjumlahan.

// // Materi compairisson
// // = -> reassigemnt
// // == -> yang dibandingkan hanya valuenya saja
// // ===-> yang dibandingkan value dan juga type data

// const temp = 5;

// const condition1 = temp == "5";
// const condition2 = temp === "5";
// const condition3 = temp != "5";
// const condition4 = temp !== "5";

// console.log(condition1 && condition2); // false
// console.log(condition2 && condition4); // false
// console.log(condition4 && condition4); // true

// console.log(condition1 || condition2); // true
// console.log(condition2 || condition3); // false
// console.log(condition1 || condition4); // false

// // intinya salah satu aja true maka true

// // console.log(temp == "5"); // true
// // console.log(temp === "5"); // false
// // console.log(temp != "5"); // false
// // console.log(temp !== "5"); // true

// let angka = 5;
// angka += 2; // angka = angka + 2
// console.log(angka);

// angka -= 2; // angka = angka - 2
// console.log(angka);

// angka *= 2; // angka = angka * 2
// console.log(angka);

// angka /= 2; // angka = angka / 2
// console.log(angka);

// angka %= 2; // angka = angka % 2
// console.log(angka);

// /*
// &&
// FALSE + FALSE = FALSE
// FALSE + TRUE = TRUE
// TRUE + FALSE = TRUE
// */

// -----===== PRIMITIVE =====-----
let strVar = "Hello World"; // String
let intVar = 12345678; // Number / Int
// BigInt -> untuk jumlah number yang lebih besar daripada tipe data Number
let undefinedVar; // Undefined
let boolVar = false; // Boolean
// Symbol - > untuk pengenal yang unik
let nullVar = null; // Null

// 128111300000001 -> 128111300000000
// 128111300000002 -> 128111300000000
// 128111300000003 -> 128111300000000
// 128111300000004 -> 128111300000000

// -----===== COLLECTIONS =====-----
let objVar = {
  id: 1,
  name: "John Wick",
  isMarried: false,
  address: {
    city: "NYC",
    country: "USA",
    postal_code: "14045",
  },
  hobby: ["hobby1", "hobby2", "hobby3"],
}; // Object

let arrVar = []; // Array

const strArr = ["apel", "jeruk", "mangga"]; // Array of string
const intArr = [1, 2, 3, 4, 5]; // Array of integer
const objArr = [objVar, objVar, objVar]; // Array of object

const nama = "Adelaine";

console.log("Hallo " + nama + "! Aku seorang programmer");
console.log(`Hallo ${nama}! Aku seorang programmer`);
console.log(nama.length);
