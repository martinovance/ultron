import { AppBar, Box, Toolbar, Typography } from "@mui/material"

function Appbar() {
  return (
    <AppBar
      elevation={0}
      sx={{
        display: { xs: "none", md: "flex" },
        height: "64px",
        backgroundColor: "#fff",
        px: "49px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#000000",
          "& .MuiTypography-root": {
            font: "Inter",
            fontSize: "13px",
            fontWeight: "medium",
            lineHeight: "16px",
            opacity: "50%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            "&.MuiTypography-root": {
              color: "red",
            },
          }}
        >
          <Typography>English</Typography>
          <Typography>Dollar</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Typography>Tracking Package</Typography>
          <Typography>FAQ</Typography>
          <Typography>About Us</Typography>
          <Typography>Contact Us</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
