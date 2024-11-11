import * as React from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

const movie1Image = "../asset/inception.jpg";
const movie2Image = "../asset/interstellar.jpg";
const movies = [
  { id: 1, title: "Inception", image: movie1Image },
  {
    id: 2,
    title: "Interstellar",
    image: movie2Image,
  },
  { id: 3, title: "Dunkirk", image: movie2Image },
  { id: 4, title: "Tenet", image: movie2Image },
  {
    id: 5,
    title: "The Dark Knight",
    image: movie2Image,
  },
  { id: 6, title: "Memento", image: movie2Image },
  {
    id: 7,
    title: "The Prestige",
    image: movie2Image,
  },
  {
    id: 8,
    title: "Batman Begins",
    image: movie2Image,
  },
  // Ajoutez d'autres films ici si besoin
];

export default function MovieList() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid2 container spacing={1} justifyContent="center">
        {movies.map((movie) => (
          <Grid2
            key={movie.id}
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 6,
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "150px",
                height: "150px",
                marginBottom: 8,
                borderRadius: 4,
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100px",

                gap: 1,
              }}
            >
              <Typography variant="body1" align="center">
                {"2019"}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                border={1}
                borderRadius={3}
              >
                {"movie"}
              </Typography>

              <Typography variant="body1" align="center">
                {"1h30min"}
              </Typography>
            </Box>
            <Typography variant="h6">{movie.title}</Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
