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

function goToDetails(movieId) {
  window.location.href = `details.html?id=${movieId}`;
}

function goToGenre(genre) {
  window.location.href = `genre.html?genre=${genre}`;
}

let movies = [
  { name: "Inception", id: 1 },
  { name: "Interstellar", id: 2 },
  { name: "The Dark Knight", id: 3 }
];

function searchMovies() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = ""; // Clear previous results

  console.log("Search input:", input); // Debugging

  if (input.trim() === "") {
      resultsDiv.style.display = "none"; // Hide results if empty
      return;
  }

  let filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(input));

  console.log("Filtered Movies:", filteredMovies); // Debugging

  if (filteredMovies.length === 0) {
      resultsDiv.innerHTML = "<p class='no-results'>No results found</p>";
      resultsDiv.style.display = "block";
      return;
  }

  filteredMovies.forEach(movie => {
      let movieItem = document.createElement("div");
      movieItem.textContent = movie.name;
      movieItem.classList.add("search-result");
      movieItem.onclick = function () {
          goToDetails(movie.id); // Calls function to open detail.html
      };
      resultsDiv.appendChild(movieItem);
  });

  resultsDiv.style.display = "block"; // Ensure results are shown
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