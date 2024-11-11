import axios from "axios";
const API_KEY = "4e3ae2e8269bcc878b1953f10320c6a9"; // Remplacez par votre clé API TMDB
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
export const fetchMovies = async () => {
  try {
    const response = await axios.get(``, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return response.data; // Retourne les détails du film
  } catch (err) {
    console.error("Error fetching movie:", err);
    throw err; // Lancer l'erreur pour que l'appelant puisse la gérer
  }
};
