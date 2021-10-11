// $.ajax({
//     url: "",
// });

// fetch("http://www.omdbapi.com/?apikey=ae6930c5&s=Avengers")
//     .then(response => response
//         .json()).then(response => console.log(response))

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve("Janji telah ditepati");
//     } else {
//         reject("Janji telah dingkari..");
//     }
// });

// janji1
//     .then((response) => console.log(`OK! : ${response}`))
//     .catch((response) => console.log(`NOT OK! : ${response}`));

// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve("Janji telah ditepati");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject("Janji tidak ditepati");
//         }, 2000);
//     };
// });

// console.log("Mulai");
// // console.log(janji2.then((response) => console.log(response)));

// janji2
//     .finally(() => console.log("Selesai menunggu"))
//     .then((response) => console.log(`OK! : ${response}`))
//     .catch((response) => console.log(`NOT OK! : ${response}`));
// console.log("Selesai");

// let film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             Nama: "Dilan 1991",
//             Tahun: 2018,
//             Aktor: "Dilan, Milea"
//         }]);
//     }, 1000);
// });

// let cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//                 Wilayah: "D.I Yogyakarta",
//                 suhu: "20C"
//             },
//             {
//                 Wilayah: "Jawa Timur",
//                 suhu: "25C"
//             },
//             {
//                 Wilayah: "Jawa Barat",
//                 suhu: "30C"
//             }
//         ]);
//     }, 500);
// });


// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// Promise.all([cuaca, film]).then((response) => {
//     // response.forEach((v) => console.log(v));
//     [film, cuaca] = response;

//     console.log(film);
//     console.log(cuaca);
// });

// $(document).ready(function() {
//     $('.data-request').on("click", function() {
//         let keyword = $.trim($('.keyword').val());

//         $.ajax({
//             url: "http://www.omdbapi.com/?apikey=ae6930c5&s=" + keyword,
//             success: function(response) {
//                 if (response.Response != "False") {
//                     results = response.Search;
//                     let cards = '';

//                     results.forEach(function(value) {
//                         cards += `
//                     <div class="col-md-4 my-3">
//                         <div class="card">
//                             <img src="${value.Poster}" class="card-img-top">
//                             <div class="card-body">
//                                 <h5 class="card-title">${value.Title}</h5>
//                                 <h6 class="card-subtitle mb-2 text-muted">${value.Year}</h6>
//                                 <a href="#" class="btn btn-primary detail-btn" data-toggle="modal" data-target="#modelId" data-imdbid="${value.imdbID}">Show Details</a>
//                             </div>
//                         </div>
//                     </div>
//                     `;
//                         $(".card-container").html(cards);
//                     });

//                     $(".detail-btn").on("click", function() {
//                         let imdbid = $(this).data("imdbid");

//                         $.ajax({
//                             url: "http://www.omdbapi.com/?apikey=ae6930c5&i=" + imdbid,
//                             success: function(response) {
//                                 let details = `
//                                 <div class="container-fluid">
//                                         <div class="row">
//                                             <div class="col-md-3">
//                                                 <img src="${response.Poster}" class="img-fluid">
//                                             </div>
//                                             <div class="col-md">
//                                                 <ul class="list-group">
//                                                     <li class="list-group-item"><strong><h2>${response.Title} (${response.Year})</h2></strong></li>
//                                                     <li class="list-group-item"><strong>Director:</strong> ${response.Director}</li>
//                                                     <li class="list-group-item"><strong>Actors:</strong> ${response.Actors}</li>
//                                                     <li class="list-group-item"><strong>Writer:</strong> ${response.Writer}</li>
//                                                     <li class="list-group-item"><strong>Plot:</strong><br>${response.Plot}</li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 `;

//                                 $('.detail-container').html(details);
//                             }
//                         });
//                     })
//                 } else {
//                     alert("Sorry, we cannot found the movie do you search");
//                 }

//             }
//         });
//     })
// });

let btn = document.querySelector(".data-request");
let keyword = document.querySelector(".keyword");

btn.addEventListener("click", function() {
    fetch("http://www.omdbapi.com/?apikey=ae6930c5&s=" + keyword.value)
        .then((response) => response.json()).then((response) => {
            if (!response.Error) {
                let hasil = response.Search;
                let cards = '';

                // console.log(response);


                hasil.forEach(function(value) {
                    cards += `
                        <div class="col-md-4 my-3">
                            <div class="card">
                                <img src="${value.Poster}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${value.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${value.Year}</h6>
                                    <a href="#" class="btn btn-primary detail-btn" data-toggle="modal" data-target="#modelId" data-imdbid="${value.imdbID}">Show Details</a>
                                </div>
                            </div>
                        </div>
                        `;
                });

                let container = document.querySelector(".card-container");
                container.innerHTML = cards;

                let detailBtn = document.querySelectorAll(".detail-btn");

                detailBtn.forEach((e) => {
                    e.addEventListener("click", function() {
                        let imdbid = e.dataset.imdbid

                        fetch("http://www.omdbapi.com/?apikey=ae6930c5&i=" + imdbid)
                            .then((response) => response.json())
                            .then((response) => {
                                let details = `
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-3">
                                        <img src="${response.Poster}" class="img-fluid">
                                    </div>
                                    <div class="col-md">
                                        <ul class="list-group">
                                            <li class="list-group-item"><strong><h2>${response.Title} (${response.Year})</h2></strong></li>
                                            <li class="list-group-item"><strong>Director:</strong> ${response.Director}</li>
                                            <li class="list-group-item"><strong>Actors:</strong> ${response.Actors}</li>
                                            <li class="list-group-item"><strong>Writer:</strong> ${response.Writer}</li>
                                            <li class="list-group-item"><strong>Plot:</strong><br>${response.Plot}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            `;

                                let detailContainer = document.querySelector(".detail-container");
                                detailContainer.innerHTML = details;
                            })
                    });
                })



            } else {
                alert("Maaf, kami tidak dapat menemukan film yang anda maksud");
            }
        })
});