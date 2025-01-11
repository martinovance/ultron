/* eslint-disable prettier/prettier */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material"
import Appbar from "@/modules/Home/components/Appbar"
import Navbar from "@/modules/Home/components/Navbar"

import Hero1 from "@/assets/Hero1.svg"
import Hero2 from "@/assets/Hero2.svg"
import Hero3 from "@/assets/Hero3.svg"

function Home() {
  return (
    <Box>
      <Appbar />
      <Navbar />
      <Grid
        container
        spacing={2}
        sx={{
          px: "70px",
          height: "100vh",
        }}
      >
        <Grid item md={8}>
          <Card
            sx={{
              borderRadius: "36px",
              height: "100%",
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              src={Hero1}
              alt="image"
              sx={{
                objectFit: "cover",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                top: 40,
                left: 20,
              }}
            >
              <Typography
                sx={{
                  font: "Inter",
                  fontSize: "50px",
                  fontWeight: "medium",
                  color: "#fff",
                  lineHeight: 1.0,
                }}
              >
                Color of <br />
                Summer <br />
                Outfit
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  font: "400",
                  fontSize: "16px",
                  fontWeight: "medium",
                  color: "#fff",
                }}
              >
                100+ Collections for your outfit
                <br /> inspirations in this summer
              </Typography>
              <Button
                sx={{
                  mt: 3,
                  backgroundColor: "#000",
                  color: "#fff",
                  width: "230px",
                  textTransform: "capitalize",
                  borderRadius: "50px",
                }}
              >
                View Collection
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          spacing={3}
          item
          md={4}
          sx={{
            height: "100vh",
          }}
        >
          <Grid item md={12}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "36px",
                height: "50vh",
              }}
            >
              <CardMedia component="img" src={Hero2} alt="image" />
              <CardContent
                sx={{
                  position: "absolute",
                  top: 15,
                  left: 5,
                }}
              >
                <Typography
                  sx={{
                    font: "Inter",
                    fontSize: "35px",
                    fontWeight: "medium",
                    color: "#000",
                    lineHeight: 1.0,
                  }}
                >
                  Outdoor <br />
                  Active
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={12}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "36px",
                height: "50vh",
              }}
            >
              <CardMedia component="img" src={Hero3} alt="image" />
              <CardContent
                sx={{
                  position: "absolute",
                  top: 15,
                  left: 5,
                }}
              >
                <Typography
                  sx={{
                    font: "Inter",
                    fontSize: "35px",
                    fontWeight: "medium",
                    color: "#000",
                    lineHeight: 1.0,
                  }}
                >
                  Casual <br />
                  Comfort
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
