import { Box, Button, Grid, IconButton, Typography } from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { ShopData } from "@/constant/ShopData"
import { useLikedItems } from "@/hooks/useLikedItems"
import Appbar from "../Home/components/Appbar"
import Navbar from "../Home/components/Navbar"
import Footer from "../Home/components/Footer"
import { Clear } from "@mui/icons-material"
import MobileNav from "../Home/components/MobileNav"
import { useCart } from "@/hooks/useCart"

function Wishlist() {
  const { addToCart } = useCart()
  const { likedItems, handleLike } = useLikedItems()
  const likedData = ShopData.filter((item) => likedItems.includes(item.id))

  return (
    <>
      <MobileNav />
      <Appbar />
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: "16px", sm: "70px" },
          gap: 2,
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            width: { xs: "100%", md: "800px" },
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "600", color: "#3C4242" }}
            >
              Wishlist
            </Typography>
          </Grid>
          {likedData.map((item, index) => (
            <Grid item key={index} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: 3,
                  flexDirection: { xs: "column", sm: "row" },
                  height: { xs: "100%", md: "90px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 2,
                    height: "90px",
                    width: "100%",
                  }}
                >
                  <IconButton
                    onClick={() => handleLike(item.id)}
                    sx={{ display: { xs: "none", sm: "flex" } }}
                  >
                    <Clear />
                  </IconButton>
                  <LazyLoadImage
                    alt="image"
                    src={item.image}
                    effect="blur"
                    style={{
                      borderRadius: "4px",
                      width: "110px",
                      height: "90px",
                      objectFit: "cover",
                    }}
                    wrapperProps={{
                      style: {
                        transition: "2s",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      minWidth: "30%",
                      height: { xs: "90px", md: "100%" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "Space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "25px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "25px",
                      }}
                    >
                      Color: <span style={{ color: "#807D7E" }}>Yellow</span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "25px",
                      }}
                    >
                      Quantity: <span style={{ color: "#807D7E" }}>1</span>
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Typography>${item.price}</Typography>
                  <Button
                    onClick={() =>
                      addToCart({
                        ...item,
                        quantity: 1,
                      })
                    }
                    sx={{
                      ml: { xs: "auto", sm: 0 },
                      width: { xs: "100px", md: "140px" },
                      borderRadius: "50px",
                      color: "#fff",
                      bgcolor: "#000",
                      padding: { xs: "8px", md: "12px" },
                      textTransform: "unset",
                    }}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </>
  )
}

export default Wishlist
