import React from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/responsiveAppBar";
import { NewMovie } from "./components/newMovie";
import { ButtonMovie } from "./components/buttonMovie";
import MovieList from "./components/movieList";
function App() {
  const backgroundImage = "/assets/movie1.jpg";
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
