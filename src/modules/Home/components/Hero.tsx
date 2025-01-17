/* eslint-disable prettier/prettier */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material"

import Hero0 from "@/assets/Hero0.svg"
import Hero1 from "@/assets/Hero1.svg"
import Hero2 from "@/assets/Hero2.svg"
import Hero3 from "@/assets/Hero3.svg"
import Hero4 from "@/assets/Hero4.svg"
import Hero5 from "@/assets/Hero5.svg"
import { useState } from "react"

function Hero() {
  const [isLoading, setIsLoading] = useState([true, true, true])

  const handleImageLoad = (index: number) => {
    setIsLoading((prev) => {
      const newLoading = [...prev]
      newLoading[index] = false
      return newLoading
    })
  }

  return (
    <Box
      sx={{
        px: { xs: "16px", sm: "70px" },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
        }}
      >
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              borderRadius: { xs: "24px", sm: "36px" },
              height: { xs: "656px", sm: "100%" },
              position: "relative",
            }}
          >
            {isLoading[0] && (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="100%"
                height="100%"
              />
            )}
            <CardMedia
              component="img"
              src={Hero0}
              alt="image"
              sx={{
                display: { xs: "flex", sm: "none" },
                height: "50%",
              }}
              onLoad={() => handleImageLoad(0)}
            />
            <CardMedia
              component="img"
              src={Hero1}
              alt="image"
              sx={{ height: { xs: "50%", sm: "100%" } }}
              onLoad={() => handleImageLoad(0)}
            />
            <CardContent
              sx={{
                position: "absolute",
                top: { xs: 20, md: 70 },
                left: { xs: 10, md: 20 },
              }}
            >
              <Typography
                sx={{
                  font: "Inter",
                  fontSize: { xs: "50px", md: "60px" },
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
          spacing={1}
          item
          xs={12}
          md={4}
          sx={{
            height: "100%",
          }}
        >
          <Grid item xs={6} md={12}>
            <Card
              sx={{
                position: "relative",
                borderRadius: { xs: "24px", sm: "36px" },
                // height: "100%",
              }}
            >
              {isLoading[1] && (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height="100%"
                />
              )}
              <CardMedia
                component="img"
                src={Hero2}
                alt="image"
                onLoad={() => handleImageLoad(1)}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  top: { xs: 0, sm: 15 },
                  left: { xs: 0, sm: 5 },
                }}
              >
                <Typography
                  sx={{
                    font: "Inter",
                    fontSize: { xs: "14px", sm: "35px" },
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
          <Grid item xs={6} md={12}>
            <Card
              sx={{
                position: "relative",
                borderRadius: { xs: "24px", sm: "36px" },
                // height: "100%",
              }}
            >
              {isLoading && (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height="100%"
                />
              )}
              <CardMedia component="img" src={Hero3} alt="image" />
              <CardContent
                sx={{
                  position: "absolute",
                  top: { xs: 0, sm: 15 },
                  left: { xs: 0, sm: 5 },
                }}
              >
                <Typography
                  sx={{
                    font: "Inter",
                    fontSize: { xs: "14px", sm: "35px" },
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
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "flex-start", sm: "space-between" },
              alignItems: "flex-start",
              gap: { xs: "24px", sm: "8px" },
              height: { xs: "100%", sm: "300px" },
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
                mb: { xs: 0, sm: 5 },
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
                width: "100%",
                textTransform: "uppercase",
                borderRadius: "50px",
              }}
            >
              Browse Inspirations
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              position: "relative",
              borderRadius: "36px",
              height: { sm: "300px", md: "350px" },
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
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              position: "relative",
              borderRadius: "36px",
              height: { sm: "450px", md: "350px" },
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

export default Hero
