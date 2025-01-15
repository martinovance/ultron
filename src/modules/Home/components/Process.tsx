/* eslint-disable prettier/prettier */
import { ProcessData } from "@/constant/ProcessData"
import { Box, Grid, Typography } from "@mui/material"

function Process() {
  return (
    <Box
      sx={{
        mt: 5,
        px: "70px",
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
          lineHeight: 1.1,
        }}
      >
        Why you&apos;ll love to
        <br /> shop on our websites
      </Typography>
      <Grid container spacing={6} sx={{ mt: 2 }}>
        {ProcessData.map((item, i) => (
          <Grid
            key={i}
            md={4}
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 70,
                borderRadius: "50%",
                backgroundColor: "#000",
              }}
            >
              <item.icon sx={{ color: "#fff" }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "28px",
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  color: "#121212",
                  opacity: "80%",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Process
