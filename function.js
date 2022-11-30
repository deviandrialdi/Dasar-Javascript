// //FUNCTION ADALAH PECAHAN DARI BEBERAPA KODE serta membagi beberapa bagian kode.

// // paramter itu adalah inputan
// // fungsi ini dibagi beberapa bagian.

// // kurung kurawal itu berfungsi menjadi membagi beberapa bagian.
// function sumTwoNumberA() {
//   const a = 5;
//   const b = 6;
//   const sum = a + b;
//   console.log(sum);
// }

// function sumTwoNumberB(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }

// function sumTwoNumberC(a, b) {
//   const sum = a + b;
//   return sum;
// }

// // sumTwoNumberA();
// sumTwoNumberB(5, 4); // console.log dalam function
// sumTwoNumberB(1, 7);
// sumTwoNumberB(3, 2);

// console.log(sumTwoNumberC(5, 4)); // return dalam function

// // bentuk lain dari function

// const sumTwoNumberD = (a, b) => {
//   const sum = a + b;
//   return sum;
// };
// console.log(sumTwoNumberD(5, 4));

//BRANCING => PERCABANGAN
// brancing dibagi 2: ada if dan switch

// if ada dua pengkondisian kalo ga true ya false ya langsung end.
// if else ada dua pengkondisian true dan else, jika tru ngapain, kalo else ngapain.
// if, else if, else ada 3 kondisi

function umurToKata(umur) {
  if (umur == 1) {
    if (umur === 1) {
      return "Beneran umur 1 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 2) {
    if (umur === 2) {
      return "Beneran umur 2 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 3) {
    if (umur === 3) {
      return "Beneran umur 3 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 4) {
    if (umur === 4) {
      return "Beneran umur 4 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 5) {
    if (umur === 5) {
      return "Beneran umur 5 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 6) {
    if (umur === 6) {
      return "Beneran umur 6 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 7) {
    if (umur === 7) {
      return "Beneran umur 7 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 8) {
    if (umur === 8) {
      return "Beneran umur 8 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 9) {
    if (umur === 9) {
      return "Beneran umur 9 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 10) {
    if (umur === 10) {
      return "Beneran umur 10 tahun";
    } else {
      return "Bohong kamu";
    }
  } else if (umur == 11) {
    if (umur === 11) {
      return "Beneran umur 11 tahun";
    } else {
      return "Bohong kamu";
    }
  }
}

// console.log(umurToKata("10"));

function cobaTernary(umur) {
  if (umur >= 17) {
    return "Boleh nyetir";
  } else {
    return "Gak boleh nyetir";
  }
}

function cobaTernary2(umur) {
  return umur >= 17 ? "Boleh nyetir" : "Gak boleh nyetir";
}

// console.log(cobaTernary(17));
// console.log(cobaTernary2(17));

function trySwitch(number) {
  switch (number) {
    case 1:
      console.log("Numba wan");
      break;
    case 2:
      console.log("Not bad for second place");
      break;
    case 3:
      console.log("welp, okay third place");
      break;
    default:
      console.log("bersyukur");
      break;
  }
}

function tryIfElse(number) {
  if (number === 1) {
    console.log("Numba wan");
  } else if (number === 2) {
    console.log("Not bad for second place");
  } else if (number === 3) {
    console.log("welp, okay third place");
  } else {
    console.log("bersyukur");
  }
}

function tryTernary(number) {
  const result =
    number === 1
      ? "Numba wan"
      : number === 2
      ? "Not bad for second place"
      : number === 3
      ? "welp, okay third place"
      : "bersyukur";
  console.log(result);
}

trySwitch(4);
tryIfElse(4);
tryTernary(4);
