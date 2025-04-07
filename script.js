// Movie database (replace with dynamic database fetch later)
const movies = {
    Action: [
        { title: "", poster: "madmax.jpg", rating: "8.1" },
        { title: "John Wick", poster: "johnwick.jpg", rating: "7.9" }

    ],
    Thriller: [
  {
    title: "Andhadhun",
    poster: "img/t1.jpg",
    rating: "8.2"
  },
  {
    title: "Kahaani",
    poster: "img/t2.jpg",
    rating: "8.1"
  },
  {
    title: "Drishyam",
    poster: "img/t3.jpg",
    rating: "8.2"
  },
  {
    title: "Shutter Island",
    poster: "img/t4.jpg",
    rating: "8.2"
  },
  {
    title: "Ratsasan",
    poster: "img/t5.jpg",
    rating: "8.3"
  },
  {
    title: "Fight Club",
    poster: "img/t6.jpg",
    rating: "8.8"
  },
  {
    title: "The Silence of the Lambs",
    poster: "img/t7.jpg",
    rating: "8.6"
  },
  {
    title: "The Prestige",
    poster: "img/t8.jpg",
    rating: "8.5"
  },
  {
    title: "Kaithi",
    poster: "img/t9.jpg",
    rating: "8.4"
  },
  {
    title: "Inception",
    poster: "img/t10.jpg",
    rating: "8.8"
  }
],
    Drama: [
        { title: "The Shawshank Redemption", poster: "shawshank.jpg", rating: "9.3" },
        { title: "Forrest Gump", poster: "forrestgump.jpg", rating: "8.8" }
    ],
    Adventure:[
  {
    title: "THE ELECTRIC STATE",
    poster: "img/ad1.jpg",
    rating: "5.9"
  },
  {
    title: "MICKEY 17",
    poster: "img/ad2.jpg",
    rating: "7.0"
  },
  {
    title: "INTERSTELLAR",
    poster: "img/3.jpg",
    rating: "8.7"
  },
  {
    title: "SHAZAM! FURY OF THE GODS",
    poster: "img/ad4.jpg",
    rating: "5.9"
  },
  {
    title: "CAPTAIN AMERICA: BRAVE NEW WORLD",
    poster: "img/ad5.jpg",
    rating: "5.9"
  },
  {
    title: "Twisters",
    poster: "img/ad6.jpg",
    rating: "6.5"
  },
  {
    title: "Gladiator II",
    poster: "img/ad7.jpg",
    rating: "6.5"
  },
  {
    title: "Venom: The Last Dance",
    poster: "img/ad8.jpg",
    rating: "6.0"
  },
  {
    title: "The Hunger Games",
    poster: "img/ad9.jpg",
    rating: "7.2"
  },
  {
    title: "Avengers: Endgame",
    poster: "img/m8.jpg",
    rating: "8.4"
  }
],
    Crime: [
        { title: "Pirates of the Caribbean", poster: "pirates.jpg", rating: "8.0" },
        { title: "The Lord of the Rings", poster: "lotr.jpg", rating: "9.0" }
    ],
    Marvel: [
  {
    title: "Captain America",
    poster: "img/m1.jpg",
    rating: "6.9"
  },
  {
    title: "Captain Marvel",
    poster: "img/m2.jpg",
    rating: "6.8"
  },
  {
    title: "Iron Man",
    poster: "img/m3.jpg",
    rating: "7.9"
  },
  {
    title: "The Incredible Hulk",
    poster: "img/m4.jpg",
    rating: "6.6"
  },
  {
    title: "Thor",
    poster: "img/m5.jpg",
    rating: "7.0"
  },
  {
    title: "The Avengers",
    poster: "img/m6.jpg",
    rating: "8.0"
  },
  {
    title: "Spider-Man: Far From Home",
    poster: "img/m7.jpg",
    rating: "7.4"
  },
  {
    title: "Avengers: Endgame",
    poster: "img/m8.jpg",
    rating: "8.4"
  },
  {
    title: "Thor: The Dark World",
    poster: "img/m9.jpg",
    rating: "6.7"
  },
  {
    title: "Captain America: The Winter Soldier",
    poster: "img/m10.jpg",
    rating: "7.7"
  }
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
