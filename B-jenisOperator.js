// 1. Arithmetic Operator atau matematika operator

a = 10;
b = 20;

add = a + b; // tambah
console.log ("Result addition is " + add); //penambahan hasilnya 30

sub = a - b;
console.log ("Result subtraction is " + sub); // subtraction artinya pengurangan. hasilnya -10

mul = a * b;
console.log("Result multiplication is " + mul) // perkalian. hasilnya 200

div = a / b;
console.log("Result division is " + div) // pembagian. hasilnya 0.5

mod = a % b;
console.log("Result modulus is " + mod); // modulus artinya sisa bagi. hasilnya 10.


let increment = 5;
increment++
console.log(increment); // 6

let decrement = 6;
decrement--
console.log(decrement); // 5

// penjelasan lebih lanjut terkait operator Javascript

/* 
Arithmetic Operator
=> ex : +, -, *, / %, ++, __, **

NAMA OPERATOR	SIMBOL
Penjumlahan	       +
Pengurangan	       -
Perkalian	       *
Pemangkatan	       **
Pembagian          /
Sisa Bagi	       %
*/

//----------------------------------------//

/* 2. assigment atau Operator Penugasan pada Javascript
=> Operator penugasan adalah operator yang digunakan untuk memberikan tugas kepada variabel.

Contoh:

let a = 19;
Variabel a kita berikan tugas untuk menyimpan nilai 19.


NAMA OPERATOR	              SIMBOL
Pengisian Nilai	                =
Pengisian dan Penambahan	    +=
Pengisian dan Pengurangan	    -=
Pengisian dan Perkalian	        *=
Pengisian dan Pemangkatan	    **=
Pengisian dan Pembagian	        /=
Pengisian dan Sisa bagi	        %=
*/


// Apa bedanya dengan operator penugasan dengan operator aritmatika?
// Operator aritmatika hanya melakukan operasi aritmatika saja, sedangkan operator penugasan… ia melakukan operasi aritmatika dan juga pengisian.

// contoh.

let score = 100;
console.log('score = ' + score);

score += 5;
console.log('score = ' + score);

score -= 2;
console.log('score = ' + score);

score *= 2;
console.log('score = ' + score);

score /= 4;
console.log('score = ' + score);

score **= 2;
console.log('score = ' + score);

score %= 3;
console.log('score = ' + score);

//---------------------------------------------------//

// 3. Opeartor Perbandingan pada Javascript atau comparison

/* 
Operator relasi atau perbandingan adalah operator yang digunakan untuk membandingkan dua nilai. Operator perbandingan akan menghasilkan sebuah nilai boolean true dan false.

Operator perbandingan terdiri dari:

NAMA OPERATOR	               SIMBOL
Lebih Besar	                     >
Lebih Kecil	                     <
Sama Dengan         	    == atau === (jika sama dengan 3 membandingkan type data)
Tidak Sama dengan	        != atau !==
Lebih Besar Sama dengan	        >=
Lebih Kecil Sama dengan	        <=
*/

// contoh

// let aku = 20;
// let kamu = 19;

// // sama dengan
// let hasil = aku == kamu;
// console.log(`${aku} == ${kamu} = ${hasil}`)

// // lebih besar
// hasil = aku > kamu; 
// console.log(`${aku} == ${kamu} = ${hasil}`)

// // lebih besar sama dengan
// hasil = aku >= kamu;
// console.log(`${aku} == ${kamu} = ${hasil}`)

// // lebih kecil 
// hasil = aku < kamu;
// console.log(`${aku} == ${kamu} = ${hasil}`)

// // lebih kecil sama dengan
// hasil = aku <= kamu;
// console.log(`${aku} == ${kamu} = ${hasil}`)

// // tidak sama dengan
// hasil = aku != kamu;
// console.log(`${aku} == ${kamu} = ${hasil}`)

//----------------------------------//

// 4. Opeartor Logika pada Javascript atau logical

/* 
Operator logika digunakan untuk melakukan operasi terhadap dua nilai boolean.

Operator ini terdiri dari:

NAMA OPERATOR	           Simbol
Logika AND	                &&
Logika OR	                ||
Negasi/kebalikan	        !   
*/

// contoh

let aku = 20;
let kamu = 19;

let benar = aku > kamu; // 20 > 19
let salah = aku < kamu; // 20 < 19


// operator && (and)
var hasil = benar && salah;
console.log(`${benar} && ${salah} = ${hasil}`)

// operator || (or)
var hasil = benar || salah
console.log(`${benar} || ${salah} = ${hasil}`)

// operator ! (not)
var hasil = !benar
console.log(`!${benar} = ${salah} = ${hasil}`)

//--------------------------------------------------//

// 5. Opeartor Bitwise pada Javascript atau Bitwise

/* 
Operator bitwise merupkan operator yang digunakan untuk operasi berdasarkan bit (biner).

Operator ini terdiri dari:

Nama	                                Simbol di Java
AND	                                            &
OR	                                            |
XOR	                                            ^
Negasi/kebalikan	                            ~
Left Shift // pergeseran ke kiri	            «
Right Shift	// pergeseran ke kanan              »
Left Shift (unsigned)	                        «<
Right Shift (unsigned)	                        »>

Operator ini berlaku untuk tipe data int, long, short, char, dan byte.

Operator ini akan menghitung dari bit-ke-bit.
Misalnya, kita punya variabel a = 60 dan b = 13.

Bila dibuat dalam bentuk biner, akan menjadi seperti ini:
a = 00111100
b = 00001101

(perhatikan bilangan binernya, angka 0 dan 1)



Kemudian, dilakukan operasi bitwise

- Operasi AND
a     = 00111100
b     = 00001101
a & b = 00001100

- Operasi OR
a     = 00111100
b     = 00001101
a | b = 00111101

- Operasi XOR
a     = 00111100
b     = 00001101
a ^ b = 00110001

- Opearsi NOT (Negasi/kebalikan)
a   = 00111100
~a  = 11000011
Konsepnya memang hampir sama dengan opeartor Logika. Bedanya, Bitwise digunakan untuk biner.
*/

//contoh

var x = 4;
var y = 3;

// operator bitwise and &
var hasil = x & y;
console.log(`${x} & ${y} = ${hasil}`)

// operator bitwise or | 
var hasil = x | y;
console.log(`${x} | ${y} = ${hasil}`)

// operator bitwise xor ^
var hasil = x ^ y;
console.log(`${x} ^ ${y} = ${hasil}`)

// operator negasi ~
var hasil = ~x;
console.log(`~${x} = ${hasil}`)

// operator bitwise right shift >>
var hasil = x >> y;
console.log(`${x} >> ${y} = ${hasil}`)

// operator Left shift << 
var hasil = x << y;
console.log(`${x} << ${y} = ${hasil}`)


// operator right shift (unsigned) >>>
var hasil = x >>> y;
console.log(`${x} >>> ${y} = ${hasil}`)

// operator left Shift (unsigned) <<<
// var hasil = x <<< y; // masih dipertanyakan.
// console.log(`${x} <<< ${y} = ${hasil}`)

//----------------------------------------//



//6. Opeartor Ternary pada Javascript

/* 
Operator ternary merupakan operator yang teri diri dari tiga bagian.

Operator-operator sebelumnya hanya dua bagian saja, yaitu: bagian kiri dan kanan. Ini disebut operator binary.

Sementara operator trinary ada bagian kiri, tengah, dan kanan.

bagian kiri <operator> bagian tengah <operator> bagian kanan
*/



/* Opertor ternary pada Javascript, biasanya digunakan untuk membuat sebuah percabangan if/else.

Simbol opertor ternary terdiri dari tanda tanya dan titik dua (?:).

Bentuknya seperti ini:

<kodisi> ? "benar" : "salah"
*/


/* 
Perhatikan! <kondisi> dapat kita isi dengan ekspresi yang menghasilkan nilai true dan false.

Apabila kondisi bernilai true, maka "benar" yang akan dipilih dan sebaliknya—apabila false—maka "salah" yang akan dipilih.
*/

// contoh
// kamu suka aku? ya : tidak;
// jika jawabannya benar, maka iya, dan jika jawabannnya tidak maka tidak.

var pertanyaan = confirm ('Apakah kamu berumur diatas 18 tahun')

var hasil = pertanyaan ? ' Selamat datang' : 'Kamu tidak boleh di sini'
console.log(hasil)