import { Box, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SxSearch = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "flex", md: "none" },
        flexWrap: "wrap",
        "& > :not(style)": {
          height: 50,
          width: "100%",
        },
      }}
    >
      <Paper
        sx={{
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
          fontSize: 15,
          fontWeight: 500,
          ":hover": { cursor: "pointer " },
        }}
      >
        <SearchIcon fontSize="small" />
        Start your search
      </Paper>
    </Box>
  );
};

export default SxSearch;
