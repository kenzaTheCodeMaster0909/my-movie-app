import * as React from "react";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { MovieCard } from "./movieCard";
import { MovieResponse } from "../types/responses";
import { appConfig } from "../consts/variables";

const movie1Image = "/assets/inception.jpg";
const movie2Image = "/assets/interstellar.jpg";

export default function MovieList() {
  const [moviesData, setMoviesData] = React.useState<MovieResponse>();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          appConfig.apiUrl + appConfig.apiFilters.popular,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTNhZTJlODI2OWJjYzg3OGIxOTUzZjEwMzIwYzZhOSIsIm5iZiI6MTczMTE0NDY5Mi4zNzgwOTkyLCJzdWIiOiI2NzI4YWNiY2E3MDJmY2EyMmYwYmM1ZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.T3zE0Jtubt5WCKQSSk0h6jwicDh5DPxWTflNmIEq-M8",
              accept: "application/json",
            },
          }
        );
        if (data.status === 200) {
          setMoviesData(await data.json());
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid2 container spacing={1} justifyContent="center">
        {moviesData?.results.map((movie) => (
          <MovieCard
            key={movie.id}
            duration="180"
            title={movie.title}
            image={appConfig.imageServer + movie.poster_path}
            genre="action"
            year={movie.release_date}
            id={movie.id}
          />
        ))}
      </Grid2>
    </Box>
  );
}
