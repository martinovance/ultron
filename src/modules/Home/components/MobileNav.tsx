import { useState } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  Box,
  Button,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import Ultron from "@/assets/Images/Ultron.png"

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const onClose = () => {
    setMenuOpen(false)
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        height: "100%",
      }}
    >
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          px: { xs: 0, sm: "49px" },
          borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
        }}
      >
        <Toolbar>
          <img src={Ultron} alt="logo" style={{ height: 30, width: 30 }} />
          <Typography
            sx={{
              ml: 1,
              fontSize: "24px",
              fontWeight: "800",
              flexGrow: 1,
            }}
          >
            ULTRON
          </Typography>
          <IconButton
            edge="end"
            // color="inherit"
            aria-label="menu"
            disableRipple
            disableFocusRipple
            sx={{
              color: "#000",
              ":focus": {
                outline: "2px solid black",
              },
            }}
          >
            {menuOpen ? (
              <CloseIcon onClick={onClose} />
            ) : (
              <MenuIcon onClick={() => setMenuOpen(true)} />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Divider />

      {menuOpen && (
        <Box
          sx={{
            mt: 8,
            width: "100%",
            transition: "0.5s ease",
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            height: "100vh",
            px: { xs: "8px", sm: "70px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "#000",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                English
              </Typography>
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#000",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Dollar
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "#000",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Gift Card
              </Typography>
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#000",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Special Events
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
              width: "100%",
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "#000",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Tracking Package
              </Typography>
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#000",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                FAQs
              </Typography>
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#000",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                About Us
              </Typography>
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#000",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Contact Us
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default MobileNav
