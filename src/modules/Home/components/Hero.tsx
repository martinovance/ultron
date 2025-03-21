import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"

import HeroP0 from "@/assets/Images/HeroP0.png"
import NewHeroP1 from "@/assets/Images/NewHeroP1.webp"
// import HeroP1 from "@/assets/Images/HeroP1.png"
import HeroP2 from "@/assets/Images/HeroP2.png"
import HeroP3 from "@/assets/Images/HeroP3.png"
import HeroP4 from "@/assets/Images/HeroP4.png"
import HeroP5 from "@/assets/Images/HeroP5.png"

import { useState, useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
            elevation={0}
            sx={{
              borderRadius: { xs: "24px", sm: "36px" },
              height: { xs: "656px", sm: "100%" },
              position: "relative",
            }}
          >
            <LazyLoadImage
              alt="image"
              src={HeroP0}
              effect="blur"
              visibleByDefault
              style={{
                borderRadius: "inherit",
                width: "100%",
                height: "50%",
                display: isMobile ? "flex" : "none",
                objectFit: "cover",
              }}
              wrapperProps={{
                style: {
                  transition: "2s",
                },
              }}
            />

            <LazyLoadImage
              alt="image"
              src={NewHeroP1}
              effect="blur"
              visibleByDefault
              style={{
                borderRadius: "inherit",
                width: "100%",
                height: isMobile ? "50%" : "100%",
                objectFit: "cover",
              }}
              wrapperProps={{
                style: {
                  transition: "1s",
                },
              }}
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
              elevation={0}
              sx={{
                position: "relative",
                borderRadius: { xs: "24px", sm: "36px" },
                height: "100%",
              }}
            >
              <LazyLoadImage
                alt="image"
                src={HeroP2}
                effect="blur"
                style={{
                  borderRadius: "inherit",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                wrapperProps={{
                  style: {
                    transition: "2s",
                  },
                }}
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
              elevation={0}
              sx={{
                position: "relative",
                borderRadius: { xs: "24px", sm: "36px" },
                height: "100%",
              }}
            >
              <LazyLoadImage
                alt="image"
                src={HeroP3}
                effect="blur"
                style={{
                  borderRadius: "inherit",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                wrapperProps={{
                  style: {
                    transition: "2s",
                  },
                }}
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
            elevation={0}
            sx={{
              position: "relative",
              borderRadius: "36px",
              height: { sm: "300px", md: "350px" },
            }}
          >
            <LazyLoadImage
              alt="image"
              src={HeroP4}
              effect="blur"
              style={{
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              wrapperProps={{
                style: {
                  transition: "2s",
                },
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
            elevation={0}
            sx={{
              position: "relative",
              borderRadius: "36px",
              height: { sm: "450px", md: "350px" },
            }}
          >
            <LazyLoadImage
              alt="image"
              src={HeroP5}
              effect="blur"
              style={{
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              wrapperProps={{
                style: {
                  transition: "2s",
                },
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
