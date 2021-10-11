$(document).ready(function() {
    $('.data-request').on("click", function() {
        let keyword = $.trim($('.keyword').val());

        $.ajax({
            url: "http://www.omdbapi.com/?apikey=ae6930c5&s=" + keyword,
            success: function(response) {
                if (response.Response != "False") {
                    results = response.Search;
                    let cards = '';

                    results.forEach(function(value) {
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
                        $(".card-container").html(cards);
                    });

                    $(".detail-btn").on("click", function() {
                        let imdbid = $(this).data("imdbid");

                        $.ajax({
                            url: "http://www.omdbapi.com/?apikey=ae6930c5&i=" + imdbid,
                            success: function(response) {
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

                                $('.detail-container').html(details);
                            }
                        });
                    })
                } else {
                    alert("Sorry, we cannot found the movie do you search");
                }

            }
        });
    })
});