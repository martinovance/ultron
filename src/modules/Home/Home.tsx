import { Box } from "@mui/material"

import Mall from "@/modules/Home/components/Shop"
import ColorTab from "@/modules/Home/components/ColorTab"
import Testimony from "@/modules/Home/components/Testimony"
import Process from "@/modules/Home/components/Process"
import Blog from "@/modules/Home/components/Blog"
import Hero from "@/modules/Home/components/Hero"
import Faq from "./components/Faq"

function Home() {
  return (
    <Box sx={{ mt: 18 }}>
      <Hero />
      <Mall />
      <ColorTab />
      <Testimony />
      <Process />
      <Faq />
      <Blog />
    </Box>
  )
}

export default Home
