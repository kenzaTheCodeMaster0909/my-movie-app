import * as React from "react";
import { Box, Typography } from "@mui/material";
export function NewMovie() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 20,
        paddingLeft: 3,
        color: "white",
      }}
    >
      <Typography
        variant="button"
        gutterBottom
        sx={{
          display: "block",
          border: 1,
          padding: 0.5,
          borderRadius: 5,
          backgroundColor: "rgba(211, 211, 211, 0.4)", // Pour ajouter un fond semi-transparent
          opacity: 0.5,
        }}
      >
        New Movie{" "}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Movie Title
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mt: 2, paddingRight: 25 }}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Box>
  );
}
