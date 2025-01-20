import { useState } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Switch,
  Avatar,
  Collapse,
  Divider,
  Box,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
// import { NavLink } from "react-router-dom"

const menuItems = [
  { label: "English", link: "/" },
  { label: "Dollars", link: "/" },
  { label: "Tracking Packages", link: "/" },
  { label: "FAQ", link: "/" },
  { label: "About Us", link: "/" },
  { label: "Contact Us", link: "/" },
  { label: "Gift Cards", link: "/" },
  { label: "Special Events", link: "/" },
]

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
          <Typography
            sx={{
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
            onClick={handleDrawerToggle}
            sx={{
              color: "#000",
              ":focus": {
                outline: "2px solid black",
              },
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Divider />

      <Collapse in={menuOpen}>
        <List
          sx={{
            width: "100%",
            height: "100vh",
            padding: 2,
            backgroundColor: "#f5f5f5",
          }}
        >
          {menuItems.map((item, index) => (
            <ListItem
              // button
              key={index}
              onClick={handleDrawerToggle}
              // component={NavLink}
              // to={item.link}
              // exact
              sx={{
                "&.active": {
                  backgroundColor: "#FCF7FF",
                  "&:hover": {
                    color: "default",
                  },
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}

          <ListItem>
            <Switch edge="start" />
            <ListItemText primary="Dark mode" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText
              primary="Rudra Devi"
              secondary="rudra.devi@gmail.com"
            />
          </ListItem>
        </List>
      </Collapse>
    </Box>
  )
}

export default MobileNav
