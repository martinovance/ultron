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
import Hero4 from "@/assets/Hero4.svg"
import Hero5 from "@/assets/Hero5.svg"

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
          height: "100%",
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
              sx={{ height: "100%" }}
            />
            <CardContent
              sx={{
                position: "absolute",
                top: 70,
                left: 20,
              }}
            >
              <Typography
                sx={{
                  font: "Inter",
                  fontSize: "60px",
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
          xs={12}
          md={4}
          sx={{
            height: "100%",
          }}
        >
          <Grid item sm={6} md={12}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "36px",
                // height: "100%",
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
          <Grid item sm={6} md={12}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "36px",
                // height: "100%",
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
      <Grid container spacing={2} sx={{ px: "70px", mt: 1 }}>
        <Grid item md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "8px",
              height: "300px",
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
              Inspirations
            </Typography>
            <Typography
              sx={{
                font: "400",
                fontSize: "16px",
                fontWeight: "medium",
                color: "#000",
              }}
            >
              Our favorite combinations for casual outfit that can inspire you
              to apply on your daily activity.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mb: 5,
                borderColor: "#000",
                color: "#000",
                width: "230px",
                textTransform: "uppercase",
                borderRadius: "50px",
              }}
            >
              Browse Inspirations
            </Button>
          </Box>
        </Grid>
        <Grid item sm={6} md={4}>
          <Card
            sx={{
              position: "relative",
              borderRadius: "36px",
              height: "300px",
            }}
          >
            <CardMedia
              component="img"
              src={Hero4}
              alt="image"
              sx={{
                height: "100%",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                left: 5,
              }}
            >
              <Typography
                sx={{
                  font: "Inter",
                  fontSize: "35px",
                  fontWeight: "medium",
                  color: "#fff",
                  lineHeight: 1.0,
                }}
              >
                Say it <br />
                With Shirt
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6} md={5}>
          <Card
            sx={{
              position: "relative",
              borderRadius: "36px",
              height: "300px",
            }}
          >
            <CardMedia
              component="img"
              src={Hero5}
              alt="image"
              sx={{
                height: "100%",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                left: 5,
              }}
            >
              <Typography
                sx={{
                  font: "Inter",
                  fontSize: "35px",
                  fontWeight: "medium",
                  color: "#fff",
                  lineHeight: 1.0,
                }}
              >
                Funky never <br />
                get Old
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
