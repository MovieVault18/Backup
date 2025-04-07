// Movie database (replace with dynamic database fetch later)
const movies = {
    Action: [
        { title: "", poster: "madmax.jpg", rating: "8.1" },
        { title: "John Wick", poster: "johnwick.jpg", rating: "7.9" }

    ],
    Thriller: [
        { title: "Inception", poster: "img/.jpg", rating: "8.8" },
        { title: "Gone Girl", poster: "gonegirl.jpg", rating: "8.1" }
    ],
    Drama: [
        { title: "The Shawshank Redemption", poster: "shawshank.jpg", rating: "9.3" },
        { title: "Forrest Gump", poster: "forrestgump.jpg", rating: "8.8" }
    ],
    Adventure: [
        { title: "Pirates of the Caribbean", poster: "pirates.jpg", rating: "8.0" },
        { title: "The Lord of the Rings", poster: "lotr.jpg", rating: "9.0" }
    ],
    Crime: [
        { title: "Pirates of the Caribbean", poster: "pirates.jpg", rating: "8.0" },
        { title: "The Lord of the Rings", poster: "lotr.jpg", rating: "9.0" }
    ],
    Marvel: [
        { title: "The Shawshank Redemption", poster: "shawshank.jpg", rating: "9.3" },
        { title: "Forrest Gump", poster: "forrestgump.jpg", rating: "8.8" }
    ]
};

// Get genre from URL
const params = new URLSearchParams(window.location.search);
const genre = params.get("genre");

// Update genre title
document.getElementById("genre-title").innerText = genre + " Movies";

// Get movie container
const moviesContainer = document.getElementById("movies-container");

// Load movies for selected genre
if (movies[genre]) {
    movies[genre].forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>⭐ ${movie.rating}</p>
        `;
        moviesContainer.appendChild(movieDiv);
    });
} else {
    moviesContainer.innerHTML = "<p>No movies found for this genre.</p>";
}
