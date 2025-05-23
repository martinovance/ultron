import { ShopData } from "@/constant/ShopData"
import { useCart } from "@/hooks/useCart"
import Drawer from "@/shared/Drawer/Drawer"
import { CancelOutlined } from "@mui/icons-material"
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useNavigate } from "react-router-dom"

import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { CartItem } from "@/types/MarketItemTypes"

function CartDrawer() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()
  const navigate = useNavigate()

  const cartData: CartItem[] = cart.map((cartItem) => {
    const product = ShopData.find((item) => item.id === cartItem.id)
    return {
      ...product!,
      quantity: cartItem.quantity,
    }
  })

  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <Drawer
      drawerName="cart"
      titleText="Shopping Cart"
      primaryButton="Checkout"
      cartData={cartData}
      handleCheckout={handleCheckout}
    >
      <Grid
        container
        spacing={4}
        sx={{
          width: "100%",
        }}
      >
        {cartData.map((item, index) => (
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
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "25px",
                    }}
                  >
                    Price:{" "}
                    <span style={{ color: "#807D7E" }}>
                      ${item.price * item.quantity}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "25px",
                    }}
                  >
                    Quantity:{" "}
                    <span style={{ color: "#807D7E" }}>
                      {cart.find((cartItem) => cartItem.id === item.id)
                        ?.quantity || 0}
                    </span>
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  onClick={() => removeFromCart(item.id)}
                  sx={{ display: { xs: "none", sm: "flex" }, ml: "auto" }}
                >
                  <CancelOutlined />
                </IconButton>
                <Stack direction="row" spacing={1}>
                  <IconButton onClick={() => increaseQuantity(item.id)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => decreaseQuantity(item.id)}>
                    <RemoveIcon />
                  </IconButton>
                </Stack>
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
