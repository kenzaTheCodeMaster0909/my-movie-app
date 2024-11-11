import React from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/responsiveAppBar.tsx";
import { NewMovie } from "./components/newMovie.tsx";
import backgroundImage from "./asset/movie1.jpg";
import { ButtonMovie } from "./components/buttonMovie.tsx";
import MovieList from "./components/movieList.tsx";
function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white", // pour le texte blanc sur le fond sombre
      }}
    >
      <ResponsiveAppBar />
      <NewMovie />

      <ButtonMovie />
      <MovieList />
    </Box>
  );
}

export default App;
