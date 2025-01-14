/* eslint-disable prettier/prettier */
import { Box, Card, Grid, Typography } from "@mui/material"
import React from "react"
import Woman from "@/assets/Woman.svg"

const Testimony = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        px: "70px",
        mt: 5,
      }}
    >
      <Grid item xs={12}>
        <Card
          sx={{
            height: "500px",
            borderRadius: "36px",
            backgroundImage: `url(${Woman})`,
            // padding: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <Typography
              sx={{
                mt: 3,
                font: "400",
                fontSize: "16px",
                fontWeight: "medium",
                color: "#fff",
              }}
            >
              What people said
            </Typography>
            <Typography
              sx={{
                font: "Inter",
                fontSize: "60px",
                fontWeight: "medium",
                color: "#fff",
                lineHeight: 1.0,
              }}
            >
              Love the way they <br />
              handle the order.
            </Typography>
            <Typography
              sx={{
                mt: 3,
                font: "400",
                fontSize: "16px",
                fontWeight: "medium",
                color: "#fff",
                width: { sx: "100%", md: "500px" },
              }}
            >
              Very professional and friendly at the same time. They packed the
              order on schedule and the detail of their wrapping is top notch.
              One of my best experience for buying online items. Surely will
              come back for another purchase.
            </Typography>
            <Typography
              sx={{
                mt: 3,
                font: "400",
                fontSize: "16px",
                fontWeight: "medium",
                color: "#fff",
                width: { sx: "100%", md: "500px" },
              }}
            >
              Samantha Williams{" "}
              <span
                style={{
                  opacity: "30%",
                  font: "400",
                  fontSize: "16px",
                  fontWeight: "medium",
                  color: "#fff",
                }}
              >
                Fanshion Enthusiast
              </span>
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Testimony
