// function sapa(nama) {
//     alert(`Hallo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     let nama = prompt("Masukkan nama: ");
//     callback(nama);
// }

// tampilkanPesan(sapa)

// let mahasiswa = [
//     { "nama": "nvoaden0" },
//     { "nama": "hmordan1" },
//     { "nama": "jdowner2" },
//     { "nama": "viveagh3" },
//     { "nama": "dmacgarvey4" },
//     { "nama": "btraill5" },
//     { "nama": "ldickins6" },
//     { "nama": "vtivers7" },
//     { "nama": "rdominka8" },
//     { "nama": "elowndsborough9" },
//     { "nama": "emortena" },
//     { "nama": "cbriztmanb" },
//     { "nama": "ahellensc" },
//     { "nama": "afourcaded" },
//     { "nama": "jdungeye" },
//     { "nama": "fkisbeyf" },
//     { "nama": "krenardg" },
//     { "nama": "hmccurlyeh" },
//     { "nama": "hoffelli" },
//     { "nama": "aisackj" }
// ];

// console.log('mulai');
// mahasiswa.forEach(mhs => {
//     for (let i = 0; i < 1000000; i++) {
//         date = new Date;
//     }

//     console.log(mhs.nama);
// });
// console.log("selesai");

// let xhr = new XMLHttpRequest();

// xhr.responseType = 'json';

// xhr.onreadystatechange = function() {
//     if (this.readyState == 4) {
//         if (this.status == 200) {
//             mahasiswa = this.response;

//             // let text = ;
//             mahasiswa.forEach((mhs, i) => document.querySelector('.box').innerHTML += `Mahasiswa ke ${i+1} adalah ${mhs.nama}<br>${mhs.nama} tinggal di ${mhs.kota} serta bercita-cita menjadi ${mhs.profesi}<br><br>`);
//         }
//     }
// };

// xhr.responseType = "json";

// setTimeout(() => console.log((xhr)), 1100);

// xhr.open("GET", "data/satu.json");
// xhr.send();

// let getDataMahasiswa = function(url = '', success = (response) => {}, error = (massage) => {}) {
//     // Buat object xhr
//     let xhr = new XMLHttpRequest;

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200) {
//                 success(xhr.response);
//             } else {
//                 error("Data tidak ditemukan")
//             }
//         }
//     }

//     // Ubah data response kedalam bentuk object
//     xhr.responseType = "json";

//     xhr.open("GET", url);
//     xhr.send();
// }

// console.log("Mulai");
// getDataMahasiswa("data/satu.json", response => response.forEach(data => console.log(data.nama)), errMsg => console.log(errMsg));
// console.log("Selesai");

console.log("Mulai");
$.ajax({
    url: "data/satu.jsson",
    success: function(response) {
        console.log(response);
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log("Selesai");