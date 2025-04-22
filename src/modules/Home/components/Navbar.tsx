import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Menu,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

import { ReactComponent as Heart } from "@/assets/Heart.svg"
import { ReactComponent as User } from "@/assets/User.svg"
import { ReactComponent as Cart } from "@/assets/Cart.svg"
import Ultron from "@/assets/Images/Ultron.png"
import { ChangeEvent, MouseEvent, useCallback, useState } from "react"
import { ArrowForward, Visibility, VisibilityOff } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import useDrawer from "@/hooks/useDrawer"

function Navbar() {
  const [anchor, setAnchor] = useState<SVGSVGElement | null>(null)
  const openPop: boolean = Boolean(anchor)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>("")
  const [state, setState] = useDrawer()
  const navigate = useNavigate()

  const handleOpenDrawer = useCallback(() => {
    setState({ ...state, drawerName: "cart" })
  }, [state])

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const InputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleNoteClick = (event: MouseEvent<SVGSVGElement>) => {
    setAnchor(event.currentTarget)
  }

  const handleNoteClose = () => {
    setAnchor(null)
  }

  const handleWishlistNavigate = () => {
    navigate("/wishlist")
  }

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        left: 0,
        right: 0,
        boxSizing: "border-box",
        mt: 7,
        height: "80px",
        px: { xs: "16px", sm: "70px" },
        position: "fixed",
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Box>
        <InputBase
          fullWidth
          placeholder="Search here"
          sx={{
            display: { xs: "flex", sm: "none" },
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
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img
                  src={Ultron}
                  alt="logo"
                  style={{ height: 30, width: 30 }}
                />
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontSize: "24px",
                    fontWeight: "800",
                  }}
                >
                  ULTRON
                </Typography>
              </Box>
            </Link>
            <InputBase
              fullWidth
              placeholder="Search here"
              sx={{
                display: { xs: "none", sm: "flex" },
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
              <Button
                variant="text"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "#000",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    textTransform: "capitalize",
                  }}
                >
                  Gift Cards
                </Typography>
              </Button>
              <Button
                variant="text"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "#000",
                }}
              >
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
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "8px", sm: "36px" },
        }}
      >
        <Heart onClick={handleWishlistNavigate} style={{ cursor: "pointer" }} />
        <User style={{ cursor: "pointer" }} onClick={handleNoteClick} />
        <Menu
          anchorEl={anchor}
          id="login-menu"
          open={openPop}
          onClose={handleNoteClose}
          PaperProps={{
            elevation: 0,
            sx: {
              width: { xs: "100%", sm: "400px" },
              minHeight: "350px",
              overflowY: "hidden",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 5,
              ml: 8,
              borderRadius: "16px",
            },
          }}
          transformOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "32px",
              color: "#FFFFFF",
              gap: 2,
              boxSizing: "border-box",
              "& .MuiOutlinedInput-root": {
                height: "44px",
                borderRadius: "2px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "inherit",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "inherit",
                },
              },
            }}
          >
            <Typography
              sx={{ fontWeight: "600", fontSize: "20px", color: "#000" }}
            >
              Sign In to your account
            </Typography>
            <form style={{ width: "100%" }}>
              <InputLabel>Email</InputLabel>
              <TextField name="email" fullWidth />
              <Stack direction="row" sx={{ mt: 2 }}>
                <InputLabel>Password</InputLabel>
                <Typography
                  sx={{
                    ml: "auto",
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#A40009",
                  }}
                >
                  Forgot Password
                </Typography>
              </Stack>
              <TextField
                name="email"
                fullWidth
                value={inputValue}
                type={showPassword ? "text" : "password"}
                onChange={InputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleVisibility}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <Button
              fullWidth
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: "#000",
                color: "#fff",
                borderRadius: "50px",
                textTransform: "capitalize",
              }}
            >
              Login
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Divider sx={{ width: "30%" }} />
              <Typography
                sx={{
                  minWidth: "40%",
                  color: "#77878F",
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Don&apos;t have account
              </Typography>
              <Divider sx={{ width: "30%" }} />
            </Box>
            <Button
              fullWidth
              sx={{
                bgcolor: "#0000001A",
                color: "#000",
                borderRadius: "50px",
                textTransform: "capitalize",
              }}
            >
              Create account
            </Button>
          </Box>
        </Menu>
        <Cart onClick={handleOpenDrawer} style={{ cursor: "pointer" }} />
      </Box>
    </Card>
  )
}

export default Navbar
