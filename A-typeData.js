// A. STRING

// cara concatenate 
// Concatenate adalah , untuk menggabungkan dua atau beberapa string teks menjadi satu string.

let firstName = "Robert";
let lastName = "Smalls";

let fullName = firstName + lastName;
console.log("fullName without space: " + fullName); // fullName without space artinya nama lengkap tanpa spasi


//------------------------------------------------------------//
//B. NUMBER
// get the length artinya mencari panjang suatu data
let name = "Ada LoveLace"; // pjgnya 12

let lengthOfName_1 = name.length;
console.log("lengthOfName version 1:", lengthOfName_1);


// cara lainnya
let lengthOfName_2 = "Ada LoveLace".length;
console.log("lengthOfName version 2:", lengthOfName_2);


let message = 'hello'
message = 123456;

let n = 123;
n = 12.345;
let integer = 4; // integer artinya bilangan bulat
let float = 4.7; // float adalah tipe data angka yang memiliki bagian desimal di akhir angka.
let max = +Infinity; // Infinity artinya tak terbatas

// some operation with number
let sum = 4 + 5;
let difference = 9 - 4;
let product = 4 * 5;
let quotient = 20 / 4;
let reminder = 9 % 2;


console.log(1 / 0);
console.log(Infinity);
console.log('not a number' / 2);

//----------------------------------------------------------//
// C. BOOLEAN
// boolean adalah tipe data yang hanya mempunyai dua nilai. Yaitu true atau false (benar atau salah)

let nameFieldChecked = true; // artinya bidang nama yang diperiksa
let ageFieldCheked = false; // umur bidang yang diperiksa

let isGreater = 4 > 1; // apakah 4 besar dari 1? 
console.log(isGreater); // panggil variable


/* jadi Type data itu terbagi 3 yaitu:
1. String => objek yang memiliki ruang lingkup global yang berfungsi sebagai pembuat string atau barisan karakter. Tanda yang dapat disertakan dengan string adalah (“ ”) dan (‘ ’). Dan diakhiri dengan tanda (;).
2. Number => data yang berupa angka
3. Boolean => tipe data yang hanya mempunyai dua nilai. Yaitu true atau false (benar atau salah)
*/