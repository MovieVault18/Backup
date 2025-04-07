const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.toggle,.dropdown a,.movie-list-item h4"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


function goToGenre(genre) {
  window.location.href = `genre.html?genre=${genre}`;
}


window.onload = function () {
  let savedUser = localStorage.getItem("username");
  let loginBtn = document.getElementById("loginBtn");

  if (savedUser) {
      loginBtn.textContent = savedUser;
      loginBtn.classList.add("logged-in");

      loginBtn.addEventListener("click", function () {
          let confirmLogout = confirm("Do you want to logout?");
          if (confirmLogout) {
              localStorage.removeItem("username"); // Remove saved username
              location.reload(); // Refresh page
          }
      });
  } else {
      loginBtn.addEventListener("click", function () {
          window.location.href = "login.html"; // Redirect to login page
      });
  }
};


document.addEventListener("DOMContentLoaded", () => {
    fetch("movies.json")
        .then(response => response.json())
        .then(movies => {
            let movieContainer = document.querySelector(".movie-container");
            let usedIndexes = new Set();

            for (let i = 0; i < 6; i++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * movies.length);
                } while (usedIndexes.has(randomIndex));
                usedIndexes.add(randomIndex);

                let movie = movies[randomIndex];

                let movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");

                movieCard.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.name}">
                    <div class="movie-info">
                        <div class="movie-title">${movie.name}</div>
                        <p class="movie-desc">${movie.description}</p>
                        <a href="details.html" class="movie-button" onclick="storeMovie('${movie.name}')">View Details</a>
                    </div>
                `;

                movieContainer.appendChild(movieCard);
            }
        });
});

function storeMovie(movieName) {
    fetch("movies.json")
        .then(response => response.json())
        .then(movies => {
            let selectedMovie = movies.find(movie => movie.name === movieName);
            localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
        });
}


let moviesData = [];

fetch("movies.json")
    .then(response => response.json())
    .then(movies => {
        moviesData = movies;
    })
    .catch(error => console.error("Error fetching movie data:", error));

function showSuggestions() {
    let searchQuery = document.getElementById("search-bar").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestions-box");
    suggestionsBox.innerHTML = ""; 

    if (searchQuery === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    let filteredMovies = moviesData.filter(movie => 
        movie.name.toLowerCase().includes(searchQuery)
    );

    if (filteredMovies.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    filteredMovies.forEach(movie => {
        let suggestionItem = document.createElement("div");
        suggestionItem.classList.add("search-item");  // Updated class name
        suggestionItem.textContent = movie.name;
        suggestionItem.onclick = function() {
            document.getElementById("search-bar").value = movie.name;
            suggestionsBox.style.display = "none";
        };
        suggestionsBox.appendChild(suggestionItem);
    });

    suggestionsBox.style.display = "block";
}

function searchMovie() {
    let searchQuery = document.getElementById("search-bar").value.toLowerCase();
    let foundMovie = moviesData.find(movie => movie.name.toLowerCase() === searchQuery);

    if (foundMovie) {
        localStorage.setItem("selectedMovie", JSON.stringify(foundMovie));
        window.location.href = "details.html";
    } else {
        alert("Movie not found!");
    }
}
