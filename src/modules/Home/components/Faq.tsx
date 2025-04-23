import { Box, Divider, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import { Remove } from "@mui/icons-material"
import { FaqData } from "@/constant/FaqData"
// import RemoveIcon from "@mui/icons-material/Remove"

const Faq = () => {
  const [isToggled, setIsToggled] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setIsToggled(isToggled === id ? null : id)
  }

  return (
    <Box
      sx={{
        px: { xs: "16px", sm: "70px" },
        mt: 5,
      }}
    >
      {FaqData.map((faq, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "medium",
                fontFamily: "Monroe",
              }}
            >
              {faq.ques}
            </Typography>
            {isToggled === faq.id ? (
              <Remove
                onClick={() => handleToggle(faq.id)}
                sx={{
                  cursor: "pointer",
                }}
              />
            ) : (
              <AddIcon
                onClick={() => handleToggle(faq.id)}
                sx={{
                  cursor: "pointer",
                }}
              />
            )}
          </Box>
          {isToggled === faq.id && (
            <Box
              sx={{
                background: "grey",
                height: "100%",
                padding: 2,
              }}
            >
              <Typography sx={{ fontFamily: "Monroe", fontWeight: "400" }}>
                {faq.ans}
              </Typography>
            </Box>
          )}
          <Divider sx={{ border: "1px solid #000", mt: 2, opacity: "50%" }} />
        </Box>
      ))}
    </Box>
  )
}

export default Faq
