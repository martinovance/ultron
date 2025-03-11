import { ShopData } from "@/constant/ShopData"
import { useLikedItems } from "@/hooks/useLikedItems"
import Drawer from "@/shared/Drawer/Drawer"
import { CancelOutlined } from "@mui/icons-material"
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useNavigate } from "react-router-dom"

function CartDrawer() {
  const { likedItems, handleLike } = useLikedItems()
  const likedData = ShopData.filter((item) => likedItems.includes(item.id))
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <Drawer
      drawerName="cart"
      titleText="Shopping Cart"
      primaryButton="Checkout"
      likedData={likedData}
      handleCheckout={handleCheckout}
    >
      <Grid
        container
        spacing={4}
        sx={{
          width: "100%",
        }}
      >
        {likedData.map((shoe, index) => (
          <Grid item key={index} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 3,
                flexDirection: { xs: "column", sm: "row" },
                height: { xs: "100%", md: "90px" },
                width: "100%",
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
                <LazyLoadImage
                  alt="image"
                  src={shoe.image}
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
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "25px",
                    }}
                  >
                    {shoe.title}
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
                <IconButton
                  onClick={() => handleLike(shoe.id)}
                  sx={{ display: { xs: "none", sm: "flex" }, ml: "auto" }}
                >
                  <CancelOutlined />
                </IconButton>
              </Box>
            </Box>
            <Divider sx={{ mt: 1, color: "#E6E6E6" }} />
          </Grid>
        ))}
      </Grid>
    </Drawer>
  )
}

export default CartDrawer
