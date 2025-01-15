/* eslint-disable prettier/prettier */
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material"
import Blog1 from "@/assets/Blog1.svg"

function Blog() {
  return (
    <Box
      sx={{
        mt: 5,
        px: "70px",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        From The Blog
      </Typography>
      <Grid container spacing={6}>
        <Grid md={6} item>
          <Card
            sx={{
              height: "350px",
              borderRadius: "36px",
            }}
          >
            <CardMedia
              component="img"
              src={Blog1}
              alt="image"
              sx={{ height: "100%" }}
            />
          </Card>
        </Grid>
        <Grid md={6} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              // gap: "24px",
              height: "350px",
            }}
          >
            <Typography
              sx={{
                fontSize: "52px",
                lineHeight: 1.0,
              }}
            >
              How to combine your daily outfit to look fresh and cool.
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
              Maybe you don’t need to buy new clothes to have nice, cool, fresh
              looking outfit everyday. Maybe what you need is to combine your
              clothes collections. Mix and match is the key.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#000",
                color: "#000",
                width: "150px",
                textTransform: "uppercase",
                borderRadius: "50px",
              }}
            >
              Read More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Blog
