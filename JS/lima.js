let log = console.log;
// let mengerjakanTugas = function(mapel = '', selesai) {
//     console.log(`Siswa mulai mengerjakan tugas mapel ${mapel}`);

//     selesai();
// }

// mengerjakanTugas('MTK', function() {
//     console.log('Siswa selesai mengerjakan tugas');
// })


// let repeat = function(n = 0, action) {
//     for (let i = 1; i <= n; i++) {
//         action(i);
//     }
// }

// repeat(10, log)


// satu = `String Text`;
// dua = `String baris 1
// String baris 2
// String baris 3`;
// expression = "Ekspresi";
// tiga = `String text ${expression} string text`;

// let mhs1 = {
//     nama: "Budi Setiawan",
//     kelas: "X SIJA 1"
// }

let text = `<div class="mhs1">
    <h2>${mhs1.nama}</h2>
    <p>${mhs1.kelas}</p>
</div>
`;

// let box = document.querySelector('.box');
// box.innerHTML = text;

let a = 11;
let b = 20;

// log(`Jika a = 10 dan b = 20, maka a + b adalah ${a + b} bukan ${2 * a + b}`)

log(`${(a % 2 == 0) ? "genap" : "ganjil"}`)