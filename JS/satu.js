// let cl = () => console.clear()
// let log = (o) => console.log(o)
let cl = () => console.clear()
// // Cara untuk membuat object pada Javascript 
// // 1. Object Literal
// let mahasiswa = {
//     nama: "Budi",
//     energi: 10,
//     /** Makan untuk menambah energi 
//      *  
//      * Usage: 
//      * 
//      * object.makan(porsi)

//     * *Banyak energi akan bertambah sesuai porsi yang dimakan
//     */
//     makan: function(porsi) {
//         this.energi += porsi

//         console.log(`Halo ${this.nama}, selamat makan `)
//     }
// }



// // 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};

//     mahasiswa.nama = nama
//     mahasiswa.energi = energi
//     mahasiswa.makan = function(energi) {
//         this.energi += energi
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     return mahasiswa
// }

// let sandhika = Mahasiswa("Budi Setiawan", 20)


// // 3. Constructor Function
// function Mahasiswa(nama, energi) {

//     this.nama = nama
//     this.energi = energi
//     this.makan = function(energi) {
//         this.energi += energi
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }


// Ika = new Mahasiswa("Ika", 20)
// Budi = new Mahasiswa("Budi", 30)
// // 4. Object.create()

// function Mahasiswa(nama, energi) {
//     this.nama = nama
//     this.energi = energi
// }

// Mahasiswa.prototype.makan = function(porsi = 0) {
//     this.energi += porsi
//     return `Hallo ${this.nama}, selamat makan`
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam
//     return `Hallo ${this.nama}, selamat main`
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2
//     return `Hallo ${this.nama}, selamat tidur`
// }

// let budi = new Mahasiswa("Budi Setiawan", 30)

// versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama
        this.energi = energi
    }

    makan(porsi = 0) {
        this.energi += porsi
        return `Hallo ${this.nama}, selamat makan`
    }

    main(jam = 0) {
        this.energi -= jam
        return `Hallo ${this.nama}, selamat main`
    }

    tidur(jam = 0) {
        this.energi += jam * 2
        return `Hallo ${this.nama}, selamat tidur`
    }
}

let budi = new Mahasiswa("Budi Setiawan", 30)
let reno = new Mahasiswa("Reno Dedi Setiawan", 40)
