/* eslint-disable prettier/prettier */
import { Box, Button, InputBase, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

import { ReactComponent as Heart } from "@/assets/Heart.svg"
import { ReactComponent as User } from "@/assets/User.svg"
import { ReactComponent as Cart } from "@/assets/Cart.svg"

function Navbar() {
  return (
    <Box
      sx={{
        placeContent: "center",
        mt: 7,
        height: "80px",
        px: "74px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#000000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "800",
            }}
          >
            ULTRON
          </Typography>
          <InputBase
            fullWidth
            placeholder="Search here"
            sx={{
              height: "30px",
              color: "#000000",
              border: "1px solid #000000",
              borderRadius: 4,
              pl: 2,
              flex: 2,
              opacity: "50%",
            }}
            endAdornment={
              <SearchIcon
                sx={{
                  mr: 2,
                  color: "#000000",
                  "&:hover": { cursor: "pointer" },
                }}
              />
            }
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <Button variant="text" sx={{ color: "#000" }}>
              <Typography
                sx={{
                  fontSize: "13px",
                  textTransform: "capitalize",
                }}
              >
                All Category
              </Typography>
              <KeyboardArrowDownIcon />
            </Button>
            <Button variant="text" sx={{ color: "#000" }}>
              <Typography
                sx={{
                  fontSize: "13px",
                  textTransform: "capitalize",
                }}
              >
                Gift Cards
              </Typography>
            </Button>
            <Button variant="text" sx={{ color: "#000" }}>
              <Typography
                sx={{
                  fontSize: "13px",
                  textTransform: "capitalize",
                }}
              >
                Special Events
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Heart />
          <User />
          <Cart />
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
