import { Box, Button, TextField, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        height: { xs: "100%", md: "341px" },
        bgcolor: "#000",
        // width: "100%",
      }}
    >
      <Box
        sx={{
          padding: { xs: "40px 16px", sm: "40px 70px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "800",
                color: "#fff",
              }}
            >
              ULTRON
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#fff",
                opacity: "52%",
                width: "250px",
              }}
            >
              Ultron is a free UI Kit from Paperpillar that you can use for your
              personal or commercial project.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "flex-start",
              alignItems: { xs: "flex-start", md: "center" },
              gap: "16px",
            }}
          >
            <TextField
              name="email"
              placeholder="Type your email address"
              fullWidth
              InputProps={{
                style: {
                  color: "#fff",
                  height: "35px",
                  // width: "240px",
                  borderRadius: "50px",
                  border: "1px solid #fff",
                  borderColor: "#fff",
                },
              }}
            />
            <Button
              sx={{
                borderColor: "#000",
                bgcolor: "#fff",
                color: "#000",
                width: "100px",
                textTransform: "capitalize",
                borderRadius: "50px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            alignItems: "flex-start",
            gap: { xs: "36px", sm: "4rem", md: "36px", lg: "10rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            {[
              "Popular",
              "Shoes",
              "T-Shirt",
              "Jackets",
              "Hat",
              "Accessories",
            ].map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "14px",
                  fontWeight: index === 0 ? "bold" : "400",
                  color: "#fff",
                  textTransform: index === 0 ? "uppercase" : "capitalize",
                  opacity: index === 0 ? "100%" : "52%",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            {[
              "Menu",
              "All Category",
              "Gift Cards",
              "Special Events",
              "Testimonial",
              "Blog",
            ].map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "14px",
                  fontWeight: index === 0 ? "bold" : "400",
                  color: "#fff",
                  textTransform: index === 0 ? "uppercase" : "capitalize",
                  opacity: index === 0 ? "100%" : "52%",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            {[
              "Other",
              "Tracking Package",
              "FAQ",
              "About Us",
              "Contact Us",
              "Terms and Conditions",
            ].map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "14px",
                  fontWeight: index === 0 ? "bold" : "400",
                  color: "#fff",
                  textTransform: index === 0 ? "uppercase" : "capitalize",
                  opacity: index === 0 ? "100%" : "52%",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
