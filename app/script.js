const movieList = [
  {
    id: "1641896323528",
    name: "The Hurlocker",
    year: 1998,
    genre: "War, Drama",
    image: {
      url: "/images/hurlocker.jpg",
      altInfo: "DVD cover of Hurlocker",
    },
  },
  {
    id: "1641896325448",
    name: "The Dark knight",
    year: 2008,
    genre: "Crime, Dark, Fantasy",
    image: {
      url: "/images/dark_knight.jpg",
      altInfo: "DVD cover of the Dark knight",
    },
  },
];

/*
<div class="item" id="1234567891">
    <img
        width="100"
        height="100"
        src="/images/dark_knight.jpg"
        alt="Dark knight DVD cover"
    />
    <h2>The Dark Knight</h2>
    <h3>2008</h3>
    <p>Fantasy, Dark, Drama</p>
</div>
*/
function addMovieHTML(movie) {
  /*
    
movie = {
    id: "1641896323528",
    name: "The Hurlocker",
    year: 1998,
    genre: "War, Drama",
    image: {
      url: "/images/hurlocker.jpg",
      altInfo: "DVD cover of Hurlocker",
    },
},
    */
  const div = document.createElement("div");
  div.setAttribute("id", movie.id);
  div.classList.add("item");

  const img = document.createElement("img");
  img.setAttribute("width", "100");
  img.setAttribute("height", "100");
  img.setAttribute("src", movie.image.url);
  img.setAttribute("alt", movie.image.altInfo);
  div.appendChild(img);

  const h2 = document.createElement("h2");
  h2.textContent = movie.name;
  div.appendChild(h2);

  const h3 = document.createElement("h3");
  h3.textContent = movie.year;
  div.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = movie.genre;
  div.appendChild(p);

  const listDiv = document.querySelector("#movie-list");
  listDiv.appendChild(div);
}

function loadMovieListHTML() {
  const listDiv = document.querySelector("#movie-list");
  listDiv.innerHTML = "";
  for (const movie of movieList) {
    addMovieHTML(movie);
  }
}

// start
loadMovieListHTML();
const addMovieForm = document.querySelector("#add-movie-form");
addMovieForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(addMovieForm);
  /*
  {
    id: "1641896323528",
    name: "The Hurlocker",
    year: 1998,
    genre: "War, Drama",
    image: {
      url: "/images/hurlocker.jpg",
      altInfo: "DVD cover of Hurlocker",
    },
  },
  */
  const movie = {
    id: new Date().getTime(),
    name: formData.get("movie-name"),
    year: formData.get("movie-year"),
    genre: formData.get("movie-genre"),
    image: {
      url: formData.get("movie-image-url"),
      altInfo: formData.get("movie-image-alt"),
    },
  };

  movieList.push(movie);
  loadMovieListHTML();
  addMovieForm.reset();
});
