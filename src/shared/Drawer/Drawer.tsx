import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid"
import { Button, Drawer as MuiDrawer, Stack } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import useDrawer from "@/hooks/useDrawer"

interface likedData {
  id: number
  price: string
  title: string
  image: string
  category: string
}

interface drawerProps {
  children: React.ReactNode
  drawerName: string
  titleText: string
  primaryButton?: string
  secondaryButton?: string
  likedData?: likedData[]
  handleCheckout: () => void
}

function Drawer({
  children,
  drawerName,
  titleText,
  primaryButton,
  secondaryButton,
  likedData,
  handleCheckout,
}: drawerProps) {
  const [state, setState] = useDrawer()

  const handleCloseDrawer = () => {
    setState({ ...state, drawerName: "", data: null })
  }

  return (
    <MuiDrawer
      anchor="right"
      open={state.drawerName === drawerName}
      onClose={() => {
        handleCloseDrawer()
      }}
      sx={{
        "& .MuiPaper-root": {
          maxWidth: "456px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
        "& .MuiGrid-root": {
          margin: 0,
          paddingX: "14px",
        },
      }}
    >
      <Box
        sx={{
          position: "static",
          paddingY: "14px",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
          minWidth: "100%",
          bgcolor: "#fff",
          zIndex: "10",
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" fontWeight={600}>
              {titleText}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleCloseDrawer}>
              <CloseIcon sx={{ color: "#000" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "7px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
        }}
      >
        {children}
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        padding="15px 30px"
        sx={{
          mt: "auto",
        }}
      >
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#1A1A1A",
              }}
            >
              {likedData?.length} Products
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#1A1A1A",
              }}
            >
              $26.00
            </Typography>
          </Stack>
        </Grid>
        {primaryButton && (
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={() => {
                handleCheckout()
                handleCloseDrawer()
              }}
              sx={{
                bgcolor: "#000",
                borderColor: "#000",
                color: "#fff",
                borderRadius: "50px",
                textTransform: "capitalize",
              }}
            >
              {primaryButton}
            </Button>
          </Grid>
        )}
        {secondaryButton && (
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                handleCloseDrawer()
              }}
              sx={{
                bgcolor: "#0000001A",
                borderColor: "#0000001A",
                color: "#000",
                borderRadius: "50px",
              }}
            >
              {secondaryButton}
            </Button>
          </Grid>
        )}
      </Grid>
    </MuiDrawer>
  )
}

export default Drawer
