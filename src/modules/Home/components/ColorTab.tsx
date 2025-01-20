import { colors } from "@/constant/ColorData"
import Chips from "@/shared/Chip/Chips"
import { Box, Typography } from "@mui/material"

function ColorTab() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "flex-start",
        alignItems: { xs: "flex-start", sm: "center" },
        gap: { xs: "16px", md: "10rem" },
        px: { xs: "16px", sm: "70px" },
        mt: 5,
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          lineHeight: 1.2,
        }}
      >
        Explore
        <br /> by Colors
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "4px",
          rowGap: "4px",
          width: { xs: "100%", sm: "550px" },
        }}
      >
        {colors.map((item, i) => (
          <Chips
            key={i}
            label={item.label}
            icon={
              <Box
                sx={{
                  height: 15,
                  width: 15,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  border:
                    item.label === "CLEAN WHITE"
                      ? "1px solid #DEDEDE"
                      : item.color,
                }}
              />
            }
            // onClick={() => handleCategory(item)}
            sx={{
              fontSize: "10px",
              border: "1px solid #DDDDDD",
              color: "#000",
              backgroundColor: "#fff",
              textTransform: "uppercase",
              padding: 1,
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#000",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ColorTab
