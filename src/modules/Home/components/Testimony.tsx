/* eslint-disable prettier/prettier */
import { Box, Card, Grid, Typography } from "@mui/material"
import React from "react"
import Woman from "@/assets/Woman.svg"

function Testimony() {
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
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              // gap: "4px",
              padding: "60px",
            }}
          >
            <Typography
              sx={{
                mt: 3,
                font: "Inter",
                fontSize: "24px",
                fontWeight: "medium",
                color: "#fff",
                opacity: "40%",
              }}
            >
              What people said
            </Typography>
            <Typography
              sx={{
                font: "Inter",
                fontSize: "55px",
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
                fontSize: "14px",
                fontWeight: "medium",
                color: "#fff",
                opacity: "70%",
                width: { sx: "100%", md: "500px" },
              }}
            >
              Very professional and friendly at the same time. They packed the
              order on schedule and the detail of their wrapping is top notch.
              One of my best experience for buying online items. Surely will
              come back for another purchase.
            </Typography>
            <Box>
              <Typography
                sx={{
                  mt: 3,
                  font: "400",
                  fontSize: "24px",
                  fontWeight: "medium",
                  color: "#fff",
                  width: { sx: "100%", md: "500px" },
                  rowGap: "4px",
                }}
              >
                Samantha William
              </Typography>
              <Typography
                style={{
                  opacity: "30%",
                  font: "400",
                  fontSize: "16px",
                  fontWeight: "medium",
                  color: "#fff",
                }}
              >
                Fashion Enthusiast
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Testimony
