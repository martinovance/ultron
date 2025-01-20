import { Box } from "@mui/material"

import Appbar from "@/modules/Home/components/Appbar"
import Navbar from "@/modules/Home/components/Navbar"
import Mall from "@/modules/Home/components/Shop"
import ColorTab from "@/modules/Home/components/ColorTab"
import Testimony from "@/modules/Home/components/Testimony"
import Process from "@/modules/Home/components/Process"
import Blog from "@/modules/Home/components/Blog"
import Footer from "@/modules/Home/components/Footer"
import Hero from "@/modules/Home/components/Hero"
import MobileNav from "./components/MobileNav"

function Home() {
  return (
    <Box>
      <MobileNav />
      <Appbar />
      <Navbar />
      <Hero />
      <Mall />
      <ColorTab />
      <Testimony />
      <Process />
      <Blog />
      <Footer />
    </Box>
  )
}

export default Home
