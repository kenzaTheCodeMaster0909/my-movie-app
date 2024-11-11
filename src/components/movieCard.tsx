import React from "react";
import { Box, Grid2, Typography } from "@mui/material";

interface MovieCardProps {
  id: number;
  title: string;
  image: string;
  year: string;
  genre: string;
  duration: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  image,
  year,
  genre,
  duration,
}) => {
  return (
    <Grid2
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 6,
      }}
    >
      <img
        src={image}
        alt={title}
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
          {year}
        </Typography>
        <Typography variant="body1" align="center" border={1} borderRadius={3}>
          {genre}
        </Typography>
        <Typography variant="body1" align="center">
          {duration}
        </Typography>
      </Box>
      <Typography variant="h6">{title}</Typography>
    </Grid2>
  );
};
