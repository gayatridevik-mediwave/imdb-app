// // default parameters
// function sayHello(name = "world") {
//   //   if (!name) {
//   //     name = "world";
//   //   }
//   console.log("hello " + name);
// }

// /*
// document.querySelector('.ola-btn') // class - can be many
// document.querySelector('#hello-btn') // id - can only be one in document
// */

// const helloBtn = document.querySelector("#hello-btn");
// const nameInput = document.querySelector("#user-name");
// helloBtn.addEventListener("click", function () {
//   const name = nameInput.value;
//   if (!name) {
//     return;
//   }
//   sayHello(name);
// });

const movieList = [
  {
    id: "1641896323528",
    name: "The Hurlocker",
    year: 1998,
    genre: "War, Drama",
  },
  {
    id: "1641896325448",
    name: "The Hurlocker",
    year: 1998,
    genre: "War, Drama",
  },
];

// for (let i = 0; i < movieList.length; i++) {
//   const movie = movieList[i];
//   console.log(movie);
// }

// for (const movie of movieList) {
//   console.log(movie);
// }

// const newMovies = movieList.map(function (movie) {
//   const nMovie = movie;
//   movie.status = "Running";
//   return movie;
// });
