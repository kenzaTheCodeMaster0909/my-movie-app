export const appConfig = {
  pages: ["New&Popular", "Movie"],
  settings: ["Profile", "History", "Logout"],
  apiUrl: "https://api.themoviedb.org/3/movie",
  apiFilters: {
    popular: "/popular",
    nowPlaying: "/now_playing",
    topRated: "/top_rated",
  },
  imageServer: "https://image.tmdb.org/t/p/w200/",
};
