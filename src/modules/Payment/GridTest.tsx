import { Box, Grid, TextField } from "@mui/material"
import React from "react"

const GridTest = () => {
  return (
    <Box
      sx={{
        width: "500px",
        px: { xs: "16px", sm: "70px" },
      }}
    >
      <Grid container spacing={2} sx={{ width: "500px" }}>
        <Grid item xs={12}>
          <TextField sx={{ width: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField sx={{ width: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField sx={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default GridTest
