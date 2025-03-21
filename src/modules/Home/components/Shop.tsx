import { ShopData } from "@/constant/ShopData"

import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material"

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { useState } from "react"
import Chips from "@/shared/Chip/Chips"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { useLikedItems } from "@/hooks/useLikedItems"

function Shop() {
  const { likedItems, handleLike } = useLikedItems()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Shoe"
  )

  const handleCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category)
  }

  const filteredData = selectedCategory
    ? ShopData.filter((item) => item.category === selectedCategory)
    : ShopData

  return (
    <Box
      sx={{
        mt: 5,
        px: { xs: "16px", sm: "70px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
          }}
        >
          Trending
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "flex-end" },
            alignItems: "center",
            gap: { xs: "16px", md: "36px" },
            maxWidth: "100%",
            overflowX: { xs: "scroll", sm: "hidden" },
            scrollbar: "hidden",
            height: "60px",
          }}
        >
          {["Shorts", "Hat", "Jackets", "Shoe", "T-Shirt"].map((item, i) => (
            <Chips
              key={i}
              label={item}
              onClick={() => handleCategory(item)}
              sx={{
                fontSize: "10px",
                border: "1px solid #DDDDDD",
                color: item === selectedCategory ? "#fff" : "#000",
                backgroundColor: item === selectedCategory ? "#000" : "#fff",
                textTransform: "uppercase",
                padding: 1,
                cursor: "pointer",
                "&:hover": {
                  color: item === selectedCategory ? "#fff" : "#000",
                  backgroundColor: item === selectedCategory ? "#000" : "#fff",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mt: 0.2 }}>
        {filteredData.map((shoe, index) => (
          <Grid
            key={index}
            item
            xs={
              Math.floor(index / 3) % 2 === 0
                ? index % 3 === 0
                  ? 6
                  : index % 3 === 1
                    ? 6
                    : 12
                : index % 3 === 0
                  ? 12
                  : index % 3 === 1
                    ? 6
                    : 6
            }
            md={
              Math.floor(index / 3) % 2 === 0
                ? index % 3 === 0
                  ? 3
                  : index % 3 === 1
                    ? 3
                    : 6
                : index % 3 === 0
                  ? 6
                  : index % 3 === 1
                    ? 3
                    : 3
            }
          >
            <Card
              sx={{
                position: "relative",
                height: { xs: "200px", sm: "300px", md: "300px" },
                borderRadius: { xs: "16px", md: "36px" },
              }}
            >
              <LazyLoadImage
                alt="image"
                src={shoe.image}
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
                  right: 2,
                  top: 2,
                }}
              >
                <IconButton
                  onClick={() => handleLike(shoe.id)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,
                    width: 30,
                    backgroundColor: likedItems.includes(shoe.id)
                      ? "#F15353"
                      : "#12121233",
                    borderRadius: "50%",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: likedItems.includes(shoe.id)
                        ? "#F15353"
                        : "#12121233",
                    },
                  }}
                >
                  <FavoriteBorderIcon
                    sx={{
                      height: 15,
                      width: 15,
                      color: "#fff",
                      opacity: "100%",
                    }}
                  />
                </IconButton>
              </CardContent>
            </Card>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-Start",
                mt: 1,
              }}
            >
              <Typography
                sx={{
                  font: "Inter",
                  color: "#121212",
                  fontWeight: "550",
                  fontSize: "18px",
                }}
              >
                {shoe.title}
              </Typography>
              <Typography
                sx={{
                  font: "Inter",
                  color: "#121212",
                  fontWeight: "400",
                  fontSize: "16px",
                  opacity: "80%",
                }}
              >
                {shoe.price}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Shop
