
let cl = () => console.clear()

// var nama = "Budi";
// console.log(nama);

// let hitung = (a = Number(), b = Number()) => a + b

// hasil = hitung()
// console.log(hasil);


// var nama = String("Budi Setiawan")
// var umur = 16


// var sayHallo = function() {
//     console.log(`Hallo, nama saya ${nama}, saya ${umur} tahun`);
// }

// console.log(sayHallo());

// function a() {
//      console.log("Ini a")

//     function b() {
//          console.log("Ini b")

//         function c() {
//              console.log("Ini c")
//         }

//         c()
//     }

//     b()
// }

// a()

function testArgs() {
    arguments.forEach(function(value, key) {
        console.log(value, key);
    })
}

testArgs("Hallo", "Ini", "Adalah", "Kumpulan", "Argument")