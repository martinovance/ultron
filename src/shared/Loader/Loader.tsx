/* eslint-disable prettier/prettier */
import { Box, CircularProgress } from "@mui/material"

function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loader
