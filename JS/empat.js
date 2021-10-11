// let tampilPesan = nama => `Hallo ${nama}`;

// console.log(tampilPesan("Pasya"));

let mahasiswa = ['Dyah', "Pasya", "Hana"]

// no = 0
// let jumlahHuruf = mahasiswa.map(function (nilai, index) {
//     no = index + 1;
//     return `Elemen dengan index ${no} memiliki panjang sebesar ${nilai.length} karakter`;
// })

// jumlahHuruf.forEach(function (value) {
//     console.log(value);
// })

// let jumlahHuruf = mahasiswa.map((nilai, index) => `Elemen dengan index ${index+1} memiliki panjang sebesar ${nilai.length} karakter`);

// let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jumlahHuruf: nama.length}))
// console.table(jumlahHuruf)

// const Mahasiwa = function() {
//     this.nama = "Budi Setiawan";
//     this.umur = 16;
//     this.sayHallo = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const budi = new Mahasiwa()

// const Mahasiswa = function() {
//     this.nama = "Budi Setiawan";
//     this.umur = 16;
//     this.sayHallo = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const budi = new Mahasiswa()

// object literal

// const mhs1 = {
//     nama: "Budi Setiawan",
//     umur: 16,
//     sayHallo: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         console.log(window);
//     }
// }

// const Mahasiwa = function() {
//     this.nama = "Budi Setiawan";
//     this.umur = 16;
//     this.sayHallo = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500)
// }

// const budi = new Mahasiwa()

// const box = document.querySelector('.box');

// box.addEventListener('click', function() {
//     satu = 'size'
//     dua = 'caption'

//     if (box.classList.contains('size')) {
//         [satu, dua] = [dua, satu]
//     }

//     box.classList.toggle(satu);

//     setTimeout(() => {
//         box.classList.toggle(dua);
//     }, 1000);
// });