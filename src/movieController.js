import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
export const loveNico = (req, res) => {
  const {
    method,
    body: { title, synopsis, genres }
  } = req;
  console.log(typeof method);
  if (method == "GET") {
    res.render("add", { pageTitle: "Add Movies!" });
  } else if (method == "POST") {
    const arrayset = genres.split(",").map(String);
    const movies = { title, synopsis, genres: arrayset };
    addMovie(movies);
    res.redirect("/");
  } else {
    res.render("404", { pageTitle: "❌ ERROR" });
  }
};

// Controllers Seperated **

// export const getadd = (req, res) => {
//   res.render("add", { pageTitle: "Add Movies" });
// };
// export const postadd = (req, res) => {
//   const {
//     body: { title, synopsis, genres }
//   } = req;

//   const arrayset = genres.split(",").map(String);
//   const movies = { title, synopsis, genres: arrayset };
//   addMovie(movies);
//   res.redirect("/");
// };
