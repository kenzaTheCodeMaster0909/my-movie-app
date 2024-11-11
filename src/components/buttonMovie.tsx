import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EastIcon from "@mui/icons-material/East";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
export function ButtonMovie() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ alignItems: "flex-start", ml: 2 }}
    >
      <Button
        sx={{
          borderRadius: 5,
          bgcolor: "white",
          color: "black",
          fontWeight: "600",
        }}
        variant="contained"
        size="large"
        startIcon={<PlayArrowSharpIcon />}
      >
        Watch Movie
      </Button>
      <Button
        sx={{
          borderRadius: 5,
          color: "black",
          border: "2px solid rgba(0, 0, 0, 0.3)",
          fontWeight: "600",
        }}
        variant="outlined"
        endIcon={<EastIcon />}
      >
        More Info
      </Button>
    </Stack>
  );
}
