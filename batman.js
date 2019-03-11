let movieUL = document.getElementById("movieUL")
let allInfo = document.getElementById("allInfo")

function loadMovies(){

  let movieURL = "http://www.omdbapi.com/?s=batman&apikey=e58016e0"

  let request = new XMLHttpRequest()

  request.open("GET",movieURL)

  request.send()

  request.onload = function() {

    if(request.status != 200) {
      console.log("Server not found.")
  }   else {
      console.log("Response Recieved")
      console.log(request.responseText)
      console.log(JSON.parse(request.responseText))
      let moviesResponse = JSON.parse(request.responseText)
      displayMovies(moviesResponse)
    }
  }
}

loadMovies()

function displayMovies(movies) {
  let moviesLI = movies.Search.map(function(movie){
    let movieItem = `<li onclick="facts('${movie.imdbID}')" class="movieItem">
                    <img id="moviePoster" src="${movie.Poster}"</img>
                    <h3 id="movieTitle">${movie.Title}</h3>
                    </li>`

    movieUL.innerHTML += movieItem
  })
}

function facts(imdbID) {
  let movieInfoURL = "http://www.omdbapi.com/?i="+imdbID+"&apikey=e58016e0"

  let request = new XMLHttpRequest()

  request.open("GET",movieInfoURL)

  request.send()

  request.onload = function() {

    if(request.status != 200) {
      console.log("Server not found.")
  }   else {
      console.log("Response Recieved")
      console.log(request.responseText)
      console.log(JSON.parse(request.responseText))
      let movieInfoResponse = JSON.parse(request.responseText)
      //displayDetails(movieInfoResponse)
      displayDetails(movieInfoResponse)
    }
  }
}

function displayDetails(movie) {

  let movieInfoItem = `<li id="movieDetails">
                      <img src="${movie.Poster}"></img>
                      <h3>${movie.Title}</h3>
                      <span>${movie.Year}</span>
                      <span>${movie.Rated}</span>
                      <span>${movie.Plot}</span>
                      </li>`

  allInfo.innerHTML = movieInfoItem
}
